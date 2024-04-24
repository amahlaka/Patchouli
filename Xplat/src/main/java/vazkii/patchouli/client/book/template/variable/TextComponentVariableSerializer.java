package vazkii.patchouli.client.book.template.variable;

import com.google.gson.JsonElement;

import net.minecraft.core.RegistryAccess;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.Component.Serializer;

import vazkii.patchouli.api.IVariableSerializer;
import vazkii.patchouli.mixin.AccessorComponentSerializer;

public class TextComponentVariableSerializer implements IVariableSerializer<Component> {
	@Override
	public Component fromJson(JsonElement json) {
		if (json.isJsonNull()) {
			return Component.literal("");
		}
		if (json.isJsonPrimitive() && json.getAsJsonPrimitive().isString()) {
			return Component.literal(json.getAsString());
		}
		return Serializer.fromJson(json, RegistryAccess.EMPTY);
	}

	@Override
	public JsonElement toJson(Component stack) {
		return AccessorComponentSerializer.invokeSerialize(stack, RegistryAccess.EMPTY);
	}
}
