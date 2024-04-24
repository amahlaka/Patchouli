package vazkii.patchouli.common.util;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.mojang.brigadier.StringReader;
import com.mojang.brigadier.exceptions.CommandSyntaxException;
import com.mojang.serialization.JsonOps;

import net.minecraft.commands.arguments.item.ItemParser;
import net.minecraft.core.component.DataComponentMap;
import net.minecraft.core.component.DataComponentPatch;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.registries.VanillaRegistries;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.tags.TagKey;
import net.minecraft.util.GsonHelper;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.crafting.Ingredient;

import org.apache.commons.lang3.tuple.ImmutableTriple;
import org.apache.commons.lang3.tuple.Triple;

import vazkii.patchouli.common.book.Book;
import vazkii.patchouli.common.book.BookRegistry;
import vazkii.patchouli.common.item.ItemModBook;

import org.jetbrains.annotations.Nullable;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

public final class ItemStackUtil {
	private static final Gson GSON = new GsonBuilder().create();

	private ItemStackUtil() {}

	public static Triple<ResourceLocation, Integer, DataComponentMap> parseItemStackString(String res) {
		String components = "";
		int componentsStart = res.indexOf("{");
		if (componentsStart > 0) {
			components = res.substring(componentsStart).replaceAll("([^\\\\])'", "$1\"").replaceAll("\\\\'", "'");
			res = res.substring(0, componentsStart);
		}

		String[] upper = res.split("#");
		String count = "1";
		if (upper.length > 1) {
			res = upper[0];
			count = upper[1];
		}

		String[] tokens = res.split(":");
		if (tokens.length < 2) {
			throw new RuntimeException("Malformed item ID " + res);
		}

		ResourceLocation key = new ResourceLocation(tokens[0], tokens[1]);
		int countn = Integer.parseInt(count);
		DataComponentMap.Builder componentMap = DataComponentMap.builder();

		if (!components.isEmpty()) {
			ItemParser parser = new ItemParser(VanillaRegistries.createLookup());
			try {
				ItemParser.ItemResult result = parser.parse(new StringReader(res.toString() + components)); //TODO: Check if the parsed result is correct
				componentMap.addAll(result.components());
			} catch (CommandSyntaxException e) {
				throw new RuntimeException("Failed to parse ItemStack JSON", e);
			}
		}

		return ImmutableTriple.of(key, countn, componentMap.build());
	}

	public static ItemStack loadFromParsed(Triple<ResourceLocation, Integer, DataComponentMap> parsed) {
		var key = parsed.getLeft();
		var count = parsed.getMiddle();
		var components = parsed.getRight();
		Optional<Item> maybeItem = BuiltInRegistries.ITEM.getOptional(key);
		if (maybeItem.isEmpty()) {
			throw new RuntimeException("Unknown item ID: " + key);
		}
		Item item = maybeItem.get();
		ItemStack stack = new ItemStack(item, count);

		if (!components.isEmpty()) {
			stack.applyComponents(components);
		}
		return stack;
	}

	public static ItemStack loadStackFromString(String res) {
		return loadFromParsed(parseItemStackString(res));
	}

	public static Ingredient loadIngredientFromString(String ingredientString) {
		return Ingredient.of(loadStackListFromString(ingredientString).toArray(new ItemStack[0]));
	}

	public static List<ItemStack> loadStackListFromString(String ingredientString) {
		String[] stacksSerialized = splitStacksFromSerializedIngredient(ingredientString);
		List<ItemStack> stacks = new ArrayList<>();
		for (String s : stacksSerialized) {
			if (s.startsWith("tag:")) {
				var key = TagKey.create(Registries.ITEM, new ResourceLocation(s.substring(4)));
				BuiltInRegistries.ITEM.getTag(key).ifPresent(tag -> tag.stream().forEach(item -> stacks.add(new ItemStack(item))));
			} else {
				stacks.add(loadStackFromString(s));
			}
		}
		return stacks;
	}

	public static StackWrapper wrapStack(ItemStack stack) {
		return stack.isEmpty() ? StackWrapper.EMPTY_WRAPPER : new StackWrapper(stack);
	}

	@Nullable
	public static Book getBookFromStack(ItemStack stack) {
		if (stack.getItem() instanceof ItemModBook) {
			return ItemModBook.getBook(stack);
		}

		Collection<Book> books = BookRegistry.INSTANCE.books.values();
		for (Book b : books) {
			if (ItemStack.isSameItem(b.getBookItem(), stack)) {
				return b;
			}
		}

		return null;
	}

	public static class StackWrapper {

		public static final StackWrapper EMPTY_WRAPPER = new StackWrapper(ItemStack.EMPTY);

		public final ItemStack stack;

		public StackWrapper(ItemStack stack) {
			this.stack = stack;
		}

		@Override
		public boolean equals(Object obj) {
			return obj == this || (obj instanceof StackWrapper && ItemStack.isSameItem(stack, ((StackWrapper) obj).stack));
		}

		@Override
		public int hashCode() {
			return stack.getItem().hashCode();
		}

		@Override
		public String toString() {
			return "Wrapper[" + stack.toString() + "]";
		}

	}

	private static String[] splitStacksFromSerializedIngredient(String ingredientSerialized) {
		final List<String> result = new ArrayList<>();

		int lastIndex = 0;
		int braces = 0;
		Character insideString = null;
		for (int i = 0; i < ingredientSerialized.length(); i++) {
			switch (ingredientSerialized.charAt(i)) {
			case '{':
				if (insideString == null) {
					braces++;
				}
				break;
			case '}':
				if (insideString == null) {
					braces--;
				}
				break;
			case '\'':
				insideString = insideString == null ? '\'' : null;
				break;
			case '"':
				insideString = insideString == null ? '"' : null;
				break;
			case ',':
				if (braces <= 0) {
					result.add(ingredientSerialized.substring(lastIndex, i));
					lastIndex = i + 1;
					break;
				}
			}
		}

		result.add(ingredientSerialized.substring(lastIndex));

		return result.toArray(new String[0]);
	}

	public static ItemStack loadStackFromJson(JsonObject json) {
		// Adapted from net.minecraftforge.common.crafting.CraftingHelper::getItemStack
		String itemName = json.get("item").getAsString();

		Item item = BuiltInRegistries.ITEM.getOptional(new ResourceLocation(itemName)).orElseThrow(() -> new IllegalArgumentException("Unknown item '" + itemName + "'")
		);

		ItemStack stack = new ItemStack(item, GsonHelper.getAsInt(json, "count", 1));

		if (json.has("nbt")) {
			JsonElement element = json.get("nbt"); //TODO: Do we want to change the "nbt" key to "components"?
			DataComponentPatch.CODEC.decode(JsonOps.INSTANCE, element).result().ifPresent(stuff -> {
				stack.applyComponents(stuff.getFirst());
			});
		}

		return stack;
	}
}
