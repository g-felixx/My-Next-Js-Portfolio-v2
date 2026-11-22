import { memo } from "react";
import { HEAD_BOX, rasterize, SPRITE_HEIGHT, SPRITE_WIDTH, type SpriteFrame } from "./sprites";

interface PixelSpriteProps {
  frame: SpriteFrame;
  /** Integer pixel multiplier. Omit to size the sprite with CSS (use multiples of the grid for crisp pixels). */
  scale?: number;
  className?: string;
  /** "head" crops to the head only (useful as a chat avatar). */
  crop?: "head";
  /** Mirror horizontally (the drawing faces left by default). */
  flip?: boolean;
}

/**
 * Renders a pixel sprite as crisp SVG rectangles. Colours come from the CSS
 * variables `--px-*` (see globals.css), so it follows the light/dark theme.
 * Decorative by default — wrap it in a labelled element when it is meaningful.
 */
function PixelSpriteBase({ frame, scale, className, crop, flip }: PixelSpriteProps) {
  const paths = rasterize(frame);
  const box = crop === "head" ? HEAD_BOX : { x: 0, y: 0, w: SPRITE_WIDTH, h: SPRITE_HEIGHT };

  return (
    <svg
      viewBox={`${box.x} ${box.y} ${box.w} ${box.h}`}
      width={scale ? box.w * scale : undefined}
      height={scale ? box.h * scale : undefined}
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
      className={`px-sprite ${className ?? ""}`}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      {paths.map(({ key, d }) => (
        <path key={key} d={d} style={{ fill: `var(--px-${key})` }} />
      ))}
    </svg>
  );
}

export const PixelSprite = memo(PixelSpriteBase);
