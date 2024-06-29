package vazkii.patchouli.client.book;

import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.blaze3d.vertex.VertexConsumer;

import net.minecraft.core.BlockPos;
import org.jetbrains.annotations.NotNull;

/**
 * Since {@link net.minecraft.client.renderer.block.LiquidBlockRenderer} doesn't use the pose stack at all, we need to
 * both (1) un-transform the positions by {@code pos}, and also re-transform them using the {@link PoseStack}.
 */
public record LiquidBlockVertexConsumer(VertexConsumer prior, PoseStack pose, BlockPos pos) implements VertexConsumer {

	@Override
	public @NotNull VertexConsumer addVertex(float x, float y, float z) {
		final float dx = pos.getX() & 15;
		final float dy = pos.getY() & 15;
		final float dz = pos.getZ() & 15;
		return prior.addVertex(pose.last().pose(), x - dx, y - dy, z - dz);
	}

	@Override
	public @NotNull VertexConsumer setColor(int r, int g, int b, int a) {
		return prior.setColor(r, g, b, a);
	}

	@Override
	public @NotNull VertexConsumer setUv(float u, float v) {
		return prior.setUv(u, v);
	}

	@Override
	public @NotNull VertexConsumer setUv1(int u, int v) {
		return prior.setUv1(u, v);
	}

	@Override
	public @NotNull VertexConsumer setUv2(int u, int v) {
		return prior.setUv2(u, v);
	}

	@Override
	public @NotNull VertexConsumer setNormal(float x, float y, float z) {
		return prior.setNormal(pose.last(), x, y, z);
	}
}
