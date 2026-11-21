import { memo, useMemo } from "react";
import { gridToPaths, type Grid, type Palette } from "./raster";

interface PixelSpriteProps {
  grid: Grid;
  palette: Palette;
  /** Escala inteira: 1 pixel do sprite = `scale` pixels CSS (mantém os pixels nítidos). */
  scale?: number;
  className?: string;
}

/** Desenha uma grade de pixel art como SVG vetorial, sem PNG e sem blur ao ampliar. */
export const PixelSprite = memo(function PixelSprite({ grid, palette, scale = 1, className }: PixelSpriteProps) {
  const paths = useMemo(() => gridToPaths(grid), [grid]);
  const w = grid[0].length;
  const h = grid.length;
  return (
    <svg
      width={w * scale}
      height={h * scale}
      viewBox={`0 0 ${w} ${h}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {Object.entries(paths).map(([key, d]) => (
        <path key={key} d={d} fill={palette[key]} />
      ))}
    </svg>
  );
});
