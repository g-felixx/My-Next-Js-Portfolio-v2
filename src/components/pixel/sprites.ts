import { edgeOf, ellipse, sample, triangle, union, type Grid, type Palette, type Shape } from "./raster";

// ---------------------------------------------------------------------------
// Golfinho (mascote): 34x20 px, virado para a direita, 4 quadros de batida de cauda.
// Gerado por geometria, então dá para ajustar proporção e cores sem redesenhar pixel a pixel.
// ---------------------------------------------------------------------------
export const DOLPHIN_W = 34;
export const DOLPHIN_H = 20;
export const DOLPHIN_PALETTE: Palette = {
  o: "#071A2F", // contorno
  b: "#2F7FD6", // corpo
  l: "#6EC1FF", // brilho no dorso
  w: "#E6F6FF", // barriga
  e: "#071A2F", // olho
  c: "#FF8F70", // bochecha
};

const TAIL_DY = [-3, 0, 3, 0];

function makeDolphin(frame: number): Grid {
  const dy = TAIL_DY[frame % TAIL_DY.length];
  const body = ellipse(17, 11.5, 11, 5.2);
  const head = ellipse(24, 10.2, 4.6, 4.2);
  const beak: Shape = (x, y) => x >= 27.5 && x < 33.5 && Math.abs(y - 12.2) <= (x < 32 ? 1.8 : 1.2);
  const dorsal = triangle([12.5, 1.2], [14, 8.5], [22, 8.5]);
  const pectoral = triangle([18, 15], [22.5, 15.5], [15.5, 19.6]);
  const stock: Shape = (x, y) => {
    const t = (x - 4) / 5;
    if (t < 0 || t > 1) return false;
    return Math.abs(y - (11.5 + dy * (1 - t))) <= 1.2 + 2 * t;
  };
  const ey = 11.5 + dy;
  const fluke = union(triangle([5.5, ey], [0, ey - 5.2], [3, ey + 0.4]), triangle([5.5, ey], [0, ey + 5.2], [3, ey - 0.4]));

  const trunk = union(body, head, beak);
  const mask = sample(DOLPHIN_W, DOLPHIN_H, union(trunk, dorsal, pectoral, stock, fluke));
  const edge = edgeOf(mask);
  const trunkMask = sample(DOLPHIN_W, DOLPHIN_H, trunk);

  return mask.map((row, y) =>
    row
      .map((on, x) => {
        if (!on) return ".";
        if (edge[y][x]) return "o";
        if (x === 26 && y === 9) return "e";
        if (x === 24 && y === 11) return "c";
        if (trunkMask[y][x] && x >= 9) {
          if (y >= (x >= 27 ? 12 : 13)) return "w";
          if (y > 0 && y < 11 && edge[y - 1][x]) return "l"; // brilho logo abaixo do contorno do dorso
        }
        return "b";
      })
      .join(""),
  );
}

export const DOLPHIN_FRAMES: Grid[] = [0, 1, 2, 3].map(makeDolphin);

// ---------------------------------------------------------------------------
// Nuvem pixel (cenário): 40x14 px
// ---------------------------------------------------------------------------
export const CLOUD_W = 40;
export const CLOUD_H = 14;
export const CLOUD_PALETTE: Palette = { w: "#FFFFFF", s: "#BFE3F7" };

export const CLOUD: Grid = (() => {
  const mask = sample(
    CLOUD_W,
    CLOUD_H,
    union(ellipse(11, 9, 8, 4), ellipse(21, 6, 9, 6), ellipse(30, 9, 8, 4), ellipse(20, 9, 17, 3.2)),
  );
  return mask.map((row, y) => row.map((on) => (!on ? "." : y >= 10 ? "s" : "w")).join(""));
})();
