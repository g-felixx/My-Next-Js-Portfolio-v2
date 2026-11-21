// Mini rasterizador para pixel art feita em código: formas geométricas viram uma
// grade de caracteres ('.' = transparente) que o <PixelSprite> desenha como SVG nítido.

export type Grid = string[];
export type Palette = Record<string, string>;
export type Shape = (x: number, y: number) => boolean;

export const ellipse =
  (cx: number, cy: number, rx: number, ry: number): Shape =>
  (x, y) => ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1;

export const triangle = (a: [number, number], b: [number, number], c: [number, number]): Shape => {
  const side = (p: [number, number], q: [number, number], x: number, y: number) =>
    (x - q[0]) * (p[1] - q[1]) - (p[0] - q[0]) * (y - q[1]);
  return (x, y) => {
    const d1 = side(a, b, x, y);
    const d2 = side(b, c, x, y);
    const d3 = side(c, a, x, y);
    const neg = d1 < 0 || d2 < 0 || d3 < 0;
    const pos = d1 > 0 || d2 > 0 || d3 > 0;
    return !(neg && pos);
  };
};

export const union =
  (...shapes: Shape[]): Shape =>
  (x, y) =>
    shapes.some((s) => s(x, y));

/** Amostra a forma no centro de cada pixel. */
export function sample(w: number, h: number, shape: Shape): boolean[][] {
  return Array.from({ length: h }, (_, y) => Array.from({ length: w }, (_, x) => shape(x + 0.5, y + 0.5)));
}

/** Pixels dentro da máscara que tocam o vazio (4 vizinhos) ou a borda da grade. */
export function edgeOf(mask: boolean[][]): boolean[][] {
  const h = mask.length;
  const w = mask[0].length;
  return mask.map((row, y) =>
    row.map((on, x) => {
      if (!on) return false;
      return [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1],
      ].some(([nx, ny]) => nx < 0 || ny < 0 || nx >= w || ny >= h || !mask[ny][nx]);
    }),
  );
}

/** Uma <path> por cor, com corridas horizontais de pixels fundidas num só retângulo. */
export function gridToPaths(grid: Grid): Record<string, string> {
  const paths: Record<string, string> = {};
  grid.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      let run = 1;
      while (x + run < row.length && row[x + run] === ch) run++;
      if (ch !== ".") paths[ch] = `${paths[ch] ?? ""}M${x} ${y}h${run}v1h-${run}z`;
      x += run;
    }
  });
  return paths;
}
