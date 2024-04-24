package vazkii.patchouli.common.recipe;

import com.mojang.serialization.Codec;
import com.mojang.serialization.MapCodec;
import com.mojang.serialization.codecs.RecordCodecBuilder;

import net.minecraft.network.RegistryFriendlyByteBuf;
import net.minecraft.network.codec.StreamCodec;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.crafting.CraftingBookCategory;
import net.minecraft.world.item.crafting.RecipeSerializer;
import net.minecraft.world.item.crafting.ShapedRecipe;
import net.minecraft.world.item.crafting.ShapedRecipePattern;

import vazkii.patchouli.api.PatchouliAPI;

import org.jetbrains.annotations.Nullable;

/**
 * Recipe type for shaped book recipes.
 * The format is the same as vanilla shaped recipes, but the
 * "result" object is replaced by a "book" string for the book ID.
 */
public class ShapedBookRecipe extends ShapedRecipe {
	public static final RecipeSerializer<ShapedBookRecipe> SERIALIZER = new Serializer();

	final ShapedRecipePattern pattern;
	final ItemStack result;
	final String group;
	final @Nullable ResourceLocation outputBook;

	public ShapedBookRecipe(String group, ShapedRecipePattern recipePattern, ItemStack result, @Nullable ResourceLocation outputBook) {
		super(group, CraftingBookCategory.MISC, recipePattern, getOutputBook(result, outputBook));
		this.pattern = recipePattern;
		this.result = result;
		this.group = group;
		this.outputBook = outputBook;
	}

	private static ItemStack getOutputBook(ItemStack result, @Nullable ResourceLocation outputBook) {
		if (outputBook != null) {
			return PatchouliAPI.get().getBookStack(outputBook);
		}
		return result;
	}

	@Override
	public RecipeSerializer<?> getSerializer() {
		return SERIALIZER;
	}

	public static class Serializer implements RecipeSerializer<ShapedBookRecipe> {
		public static final MapCodec<ShapedBookRecipe> CODEC = RecordCodecBuilder.mapCodec(
				instance -> instance.group(
						Codec.STRING.optionalFieldOf("group", "").forGetter(bookRecipe -> bookRecipe.group),
						ShapedRecipePattern.MAP_CODEC.forGetter(bookRecipe -> bookRecipe.pattern),
						ItemStack.STRICT_CODEC.optionalFieldOf("result", ItemStack.EMPTY).forGetter(bookRecipe -> bookRecipe.result),
						ResourceLocation.CODEC.optionalFieldOf("book", null).forGetter(bookRecipe -> bookRecipe.outputBook)
				)
						.apply(instance, ShapedBookRecipe::new)
		);
		public static final StreamCodec<RegistryFriendlyByteBuf, ShapedBookRecipe> STREAM_CODEC = StreamCodec.of(
				ShapedBookRecipe.Serializer::toNetwork, ShapedBookRecipe.Serializer::fromNetwork
		);

		@Override
		public MapCodec<ShapedBookRecipe> codec() {
			return CODEC;
		}

		@Override
		public StreamCodec<RegistryFriendlyByteBuf, ShapedBookRecipe> streamCodec() {
			return STREAM_CODEC;
		}

		private static ShapedBookRecipe fromNetwork(RegistryFriendlyByteBuf buf) {
			String group = buf.readUtf();
			ShapedRecipePattern recipePattern = ShapedRecipePattern.STREAM_CODEC.decode(buf);
			ItemStack result = ItemStack.OPTIONAL_STREAM_CODEC.decode(buf);
			ResourceLocation outputBook = buf.readBoolean() ? buf.readResourceLocation() : null;
			return new ShapedBookRecipe(group, recipePattern, result, outputBook);
		}

		private static void toNetwork(RegistryFriendlyByteBuf buf, ShapedBookRecipe bookRecipe) {
			buf.writeUtf(bookRecipe.group);
			ShapedRecipePattern.STREAM_CODEC.encode(buf, bookRecipe.pattern);
			ItemStack.OPTIONAL_STREAM_CODEC.encode(buf, bookRecipe.result);
			buf.writeBoolean(bookRecipe.outputBook != null);
			if (bookRecipe.outputBook != null) {
				buf.writeResourceLocation(bookRecipe.outputBook);
			}
		}
	}
}
