package vazkii.patchouli.client.book.template.variable;

import com.google.gson.JsonElement;
import com.google.gson.JsonParseException;
import com.mojang.serialization.JsonOps;

import net.minecraft.core.RegistryAccess;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.Component.Serializer;
import net.minecraft.network.chat.ComponentSerialization;

import vazkii.patchouli.api.IVariableSerializer;

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
		return ComponentSerialization.CODEC.encodeStart(RegistryAccess.EMPTY.createSerializationContext(JsonOps.INSTANCE), stack).getOrThrow(JsonParseException::new);
	}
}
