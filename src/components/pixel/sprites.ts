/**
 * Pixel-art mascot — Amanda (chibi: big head, long dark hair, round glasses,
 * big brown eyes, pink top).
 *
 * BASE is the original 48×48 pixel drawing, converted 1:1 from the SVG
 * (same canvas, same positions). Every other pose is a small patch applied on
 * top of BASE, so all frames share the exact same 48×48 grid and proportions.
 *
 * Each cell is a palette key mapped to the CSS variable `--px-<key>` (see
 * globals.css, so it follows the light/dark theme). "." is transparent.
 *
 *   K outline      H/h/j hair (dark / mid / light)
 *   S/s/d skin (base / shadow / deep shadow)   c cheek highlight
 *   W eye white    E/I iris (dark / light)
 *   G/g glasses (frame / light)
 *   r/P/p top (light / mid / shadow)           N/n pants & boots (dark / light)
 */

export const SPRITE_WIDTH = 48;
export const SPRITE_HEIGHT = 48;

// prettier-ignore
const BASE: string[] = [
  "................................................", // 00
  "................................................", // 01
  "....................KKKKKK......................", // 02
  "..................HHHHHHHHKKK...................", // 03
  "...............hhhhhhhhhhhhhhKKK................", // 04
  ".............jjjjjjjjjhhhhhjjjjjKK..............", // 05
  "............HHHHHHHHHHHHHHHHHHHHHK..............", // 06
  "...........hhhhhhhhhhhhHHHHHjjjjjjKK............", // 07
  "..........hhhhhhhhhhhhhhhhhhhhhhhhhK............", // 08
  "..........hhjjjjjjjjhhhhhhjjjjjjjjhKK...........", // 09
  ".........HHHHHHHHHHHHHHHHHHHHHHHHHHHK...........", // 10
  ".........HHhhhhhhhhhhHHHSHHhhhhhhhhHK...........", // 11
  ".........HjjjjjjjHHHHHHHSHHHHHHHHHHHKK..........", // 12
  "........HHHHHHHHHHHHHHSssssHHHHHHHHHHK..........", // 13
  "........HhhhhhhhhhhhHHSSddddHhhhhhhhHK..........", // 14
  "........HHHHHHHHHHSSSSSSSSSSSSHHHHHHHK..........", // 15
  "........HHHHHGGGGKssssssGGGGGSHHHHHHHK..........", // 16
  "........HHHHGHdddGSSSSSGKKKKKGSSHHHHHK..........", // 17
  "........HhhGhKKKKSGSSSGWWEEEKSGShhhGss..........", // 18
  "........HhhGKKWEWSGSSSGWWEWEKSGSSGGhSS..........", // 19
  "..........KGKKWEESGGgGGWWEEEKKGGGKKKSS..........", // 20
  "..........SGSSWIISGSsSGWWIIISSGSSSKKSS..........", // 21
  "..........SGScKccSGSSSGScccKcSGSSSHHddH.........", // 22
  ".........HSSGccccGSSSSSGcccccGSSSSHHHHH.........", // 23
  ".........HSSSGGGGSSSSSSSGGGGGSSSSSHHhhH.........", // 24
  ".........HhssssssssssssssssssssssKHHhhH.........", // 25
  ".........HhhssssssssssssssssssssKKHHhhH.........", // 26
  ".........HhKHHddddddddddddddddHHHHHHKhH.........", // 27
  ".........HhKHHHhhddddddddddddHHhhHHHKhH.........", // 28
  ".........HhKHHHhhHHKddddKKKKKHHhhHHHKhH.........", // 29
  ".........HhKHHHhhHHKPPPPPPPPPpHhhHHHKhH.........", // 30
  ".........HHKHHHHHHHpprrrrPPPPPpHHHHHKHH.........", // 31
  ".........HHKHHKKKKpPPrrrrrPPrrpKKKHHKHH.........", // 32
  "...........KKKK.KppPPrrrrrPPrrpp.KKKK...........", // 33
  ".............KK.PPpPPrrrrrPPPPpPPKK.............", // 34
  ".............KKppppPPrrrrrPPPPppppK.............", // 35
  "...............sSSprrrrrrrrrrPpSss..............", // 36
  "................ddpPPPPPPPPPP.pdd...............", // 37
  "..................ppppppppppppp.................", // 38
  "..................KNNNNNNNNNNNK.................", // 39
  "..................KNNNNKKKNNNNK.................", // 40
  "..................KNNNNKKKNNNNK.................", // 41
  "..................KKKKKKKKKKKKK.................", // 42
  "....................KNNKKNNK....................", // 43
  "..................KnnnnKKnnnnK..................", // 44
  ".................KnnnnnKKnnnnnK.................", // 45
  ".................KKKKKKKKKKKKKK.................", // 46
  "................................................", // 47
];

type Grid = string[][];

const cloneBase = (): Grid => BASE.map((row) => row.split(""));

function put(g: Grid, x: number, y: number, c: string) {
  if (x >= 0 && x < SPRITE_WIDTH && y >= 0 && y < SPRITE_HEIGHT) g[y][x] = c;
}

function box(g: Grid, x0: number, y0: number, x1: number, y1: number, c: string) {
  for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) put(g, x, y, c);
}

/* ───────────── blink: both eyes close into a dark lash line ───────────── */
function blinkEyes(g: Grid) {
  // left eye (x 12–16)
  box(g, 13, 18, 16, 19, "S");
  box(g, 12, 19, 13, 19, "S");
  box(g, 14, 20, 16, 20, "K"); // closed-lid line (x 12–13 are already K)
  box(g, 14, 21, 16, 21, "S");
  put(g, 14, 22, "c");
  // right eye (x 23–29)
  box(g, 24, 17, 28, 17, "S");
  box(g, 23, 18, 28, 19, "S");
  box(g, 23, 20, 27, 20, "K"); // x 28–29 are already K
  box(g, 23, 21, 27, 21, "S");
  put(g, 27, 22, "c");
}

/* ───────────── wave: left arm raised beside the head ───────────── */
function waveArm(g: Grid) {
  // take the resting left arm away (sleeve + hand)
  for (const [x, y] of [
    [17, 33], [16, 34], [17, 34], [15, 35], [16, 35], [17, 35],
    [15, 36], [16, 36], [17, 36], [16, 37], [17, 37],
  ] as const) {
    put(g, x, y, ".");
  }

  const arm = new Set<string>();
  const stamp = (x0: number, y0: number, x1: number, y1: number, pick: (x: number, y: number) => string) => {
    for (let y = y0; y <= y1; y++) {
      for (let x = x0; x <= x1; x++) {
        put(g, x, y, pick(x, y));
        arm.add(`${x},${y}`);
      }
    }
  };

  // sleeve out to the side (over the hair), then bare forearm going up
  stamp(8, 33, 17, 36, (x, y) => (y === 33 || y === 36 ? "p" : y === 34 && x >= 10 && x <= 13 ? "r" : "P"));
  stamp(4, 24, 7, 36, (x, y) => (y === 36 ? "d" : x === 7 || y === 35 ? "s" : "S"));
  // open hand (palm, fingertips, thumb)
  stamp(4, 18, 6, 18, () => "S");
  stamp(3, 19, 7, 23, (x, y) => (y === 23 || x === 7 ? "s" : "S"));
  stamp(8, 21, 8, 22, () => "S"); // thumb
  stamp(5, 19, 5, 20, () => "s"); // finger separation

  // dark outline around the whole arm
  const ring: [number, number][] = [];
  for (const key of arm) {
    const [x, y] = key.split(",").map(Number);
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = x + dx;
      const ny = y + dy;
      if (arm.has(`${nx},${ny}`)) continue;
      const here = g[ny]?.[nx];
      if (here === ".") ring.push([nx, ny]);
    }
  }
  for (const [x, y] of ring) put(g, x, y, "K");
}

/* ───────────── walk: lift one boot (rows 43–46) ───────────── */
function liftBoot(g: Grid, side: "L" | "R", rows = 2) {
  const inSide = (x: number) => (side === "L" ? x <= 23 : x >= 24);
  const moved: [number, number, string][] = [];
  for (let y = 43; y <= 46; y++) {
    for (let x = 0; x < SPRITE_WIDTH; x++) {
      if (!inSide(x) || g[y][x] === ".") continue;
      moved.push([x, y, g[y][x]]);
      g[y][x] = ".";
    }
  }
  for (const [x, y, c] of moved) put(g, x, y - rows, c);
}

function build(opts: { blink?: boolean; wave?: boolean; lift?: "L" | "R" } = {}): string[] {
  const g = cloneBase();
  if (opts.wave) waveArm(g);
  if (opts.blink) blinkEyes(g);
  if (opts.lift) liftBoot(g, opts.lift);
  return g.map((row) => row.join(""));
}

export const FRAMES = {
  idle: BASE,
  blink: build({ blink: true }),
  point: build({ wave: true }),
  pointBlink: build({ wave: true, blink: true }),
  walkA: build({ lift: "L" }),
  walkB: build({ lift: "R" }),
} as const;

export type SpriteFrame = keyof typeof FRAMES;

export interface SpritePath {
  /** palette key → CSS variable `--px-<key>` */
  key: string;
  d: string;
}

const pathCache = new Map<SpriteFrame, SpritePath[]>();

/** Merge horizontal runs of the same colour into SVG path rectangles. */
export function rasterize(frame: SpriteFrame): SpritePath[] {
  const cached = pathCache.get(frame);
  if (cached) return cached;

  const byKey = new Map<string, string>();
  FRAMES[frame].forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const key = row[x];
      let end = x + 1;
      while (end < row.length && row[end] === key) end++;
      if (key !== ".") {
        byKey.set(key, `${byKey.get(key) ?? ""}M${x} ${y}h${end - x}v1h-${end - x}z`);
      }
      x = end;
    }
  });

  const paths = Array.from(byKey, ([key, d]) => ({ key, d }));
  pathCache.set(frame, paths);
  return paths;
}
