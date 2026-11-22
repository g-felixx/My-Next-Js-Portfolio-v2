/**
 * Pixel-art mascot — the cat (chibi: big head, big eyes, purple collar with a bell).
 *
 * One drawing, two looks, chosen by the theme through CSS variables (globals.css):
 *   light → black cat with yellow eyes
 *   dark  → white cat with blue eyes and brown patches
 * (the "O" patches share the fur colour in the light theme, so they only show up on the white cat).
 *
 * Same API as `sprites.girl.ts`: every frame is a 48×48 grid of palette keys mapped to `--px-<key>`.
 *
 *   K outline          F/f/u fur (base / shade / light)   O patch / tail tip
 *   Y/y iris           Q pupil     W eye shine            T pink (nose, inner ears, paw pad)
 *   P/p collar         b bell
 *
 * Generated with a small drawing script (shapes → grid), then committed as plain data.
 */

export const SPRITE_WIDTH = 48;
export const SPRITE_HEIGHT = 48;

/** Head crop used for avatars: ears to collar (whiskers partly in), tail left out. */
export const HEAD_BOX = { x: 5, y: 1, w: 36, h: 29 };

// prettier-ignore
export const FRAMES = {
  idle: [
    "................................................", // 00
    "................................................", // 01
    ".........KK..........................KK.........", // 02
    "........KFFKKK....................KKKFFK........", // 03
    "........KFFFFFKK................KKFFFFFK........", // 04
    "........KFFOFFFFKK............KKFFFFFFFK........", // 05
    "........KFOTTFFFFFKKKKKKKKKKKKFFFFFTTFFK........", // 06
    "........KFOTTTTFFFFFFFFFFFFFFFFFFTTTTFFK........", // 07
    ".......KFFOTTTTTFFFFFFFFFFFFFFFOTTTTTFFFK.......", // 08
    ".......KFFFTTTTFFuuuuFFFFFFFFFOOOTTTTFFFK.......", // 09
    ".......KFFFTTFFuuFFFFFFFFFFFFFOOOOOTTFFFK.......", // 10
    ".......KFFFFFFFFFFFFFFFFFFFFFFOOOOOOOFFFK.......", // 11
    ".......KFFFFFFuFKFFFFFFFFFFFFFFKOOOOFFFFK.......", // 12
    ".......KFFFFFFKKYKKFFFFFFFFFFKKYKKFFFFFFK.......", // 13
    ".......KFFFFFKYYYYYKFFFFFFFFKYYYYYKFFFFFK.......", // 14
    ".......KFFFFKYWWQYYYKFFFFFFKYWWQYYYKFFFFK.......", // 15
    ".......KFFFFKYWYQYYYKFFFFFFKYWYQYYYKFFFFK.......", // 16
    ".......KFFFFKYYYQYYYKFFFFFFKYYYQYYYKFFFFK.......", // 17
    ".......KFFFFKYYYQYYYKFFFFFFKYYYQYYYKFFFFK.......", // 18
    ".......KFFFFKYYYQYYYKFFFFFFKYYYQYYYKFFFFK.......", // 19
    ".......KfFFFKYYYQYYYKFFFFFFKYYYQYYYKFFFfK.......", // 20
    "...KK...KfFOOKyyQyWKFFFFFFFFKyyQyWKFFFfK...KK...", // 21
    ".....KKK.KOOOOKyyyKFFFFTTFFFFKyyyKFFFfK.KKK.....", // 22
    "..........KOOOFKKKFFKFFKKFFKFFKKKFFFfK..........", // 23
    ".......K...KfFFFFFFFFKKFFKKFFFFFFFFfK...K.......", // 24
    ".....KK.....KffFFFFFFFFFFFFFFFFFFffK.....KK.....", // 25
    "...KK........KKffffFFFFFFFFFFffffKK........KK...", // 26
    "...............KKKKffffffffffKKKK...............", // 27
    ".................KKKKKKKKKKKKKK.................", // 28
    "................KPPPPPPPPPPPPPPK........KK......", // 29
    "..............KKFppppppppppppppFKK.....KOOK.....", // 30
    ".............KFKfFFFFFFbbFFFFFFfKFK...KOOOOK....", // 31
    "............KFFFKFFFFFFbbFFFFFFKFFFK..KOOOOK....", // 32
    "...........KFFuFKfuFFFFFFFFFFFfKFFFFK..KOOOOK...", // 33
    "...........KFFuFuKFFFFFFFFFFFFKFFFFFK..KOOOOK...", // 34
    "...........KFFFFFKFFFFFFFFFFFFKFFFFFK..KFFFFK...", // 35
    "...........KFFFFFKFFFFFFFFFFFFKFFFFFK..KFFFfK...", // 36
    "...........KFFFFfKFFFFFFFFOOOOKfFFFFK.KFFFFK....", // 37
    "...........KfFFFKFFFFFFFFOOOOOOKFFFfKKFFFFFK....", // 38
    "............KfFfKFFFFFFFFOOOOOOKfFfKKFFFFFfK....", // 39
    ".............KfKffffffFFFOOOOOOfKfKFFFFFffK.....", // 40
    "..............KfKKKKKKfFFfKKKKKKfKFFFFFfKK......", // 41
    "...............KFFFFFFKffKFFFFFFKfFFFFfK........", // 42
    "..............KFFFFFFFFKKFFFFFFFFKffffK.........", // 43
    "..............KFFFFFFFFKKFFFFFFFFKKKKK..........", // 44
    "..............KfFFFFFFfKKfFFFFFFfK..............", // 45
    "...............KffffffK..KffffffK...............", // 46
    "................KKKKKK....KKKKKK................", // 47
  ],
  blink: [
    "................................................", // 00
    "................................................", // 01
    ".........KK..........................KK.........", // 02
    "........KFFKKK....................KKKFFK........", // 03
    "........KFFFFFKK................KKFFFFFK........", // 04
    "........KFFOFFFFKK............KKFFFFFFFK........", // 05
    "........KFOTTFFFFFKKKKKKKKKKKKFFFFFTTFFK........", // 06
    "........KFOTTTTFFFFFFFFFFFFFFFFFFTTTTFFK........", // 07
    ".......KFFOTTTTTFFFFFFFFFFFFFFFOTTTTTFFFK.......", // 08
    ".......KFFFTTTTFFuuuuFFFFFFFFFOOOTTTTFFFK.......", // 09
    ".......KFFFTTFFuuFFFFFFFFFFFFFOOOOOTTFFFK.......", // 10
    ".......KFFFFFFFFFFFFFFFFFFFFFFOOOOOOOFFFK.......", // 11
    ".......KFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFK.......", // 12
    ".......KFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFK.......", // 13
    ".......KFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFK.......", // 14
    ".......KFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFK.......", // 15
    ".......KFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFK.......", // 16
    ".......KFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFK.......", // 17
    ".......KFFFFKFFFFFFFKFFFFFFKFFFFFFFKFFFFK.......", // 18
    ".......KFFFFFKKKKKKKFFFFFFFFKKKKKKKFFFFFK.......", // 19
    ".......KfFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFfK.......", // 20
    "...KK...KfFFFFFFFFFFFFFFFFFFFFFFFFFFFFfK...KK...", // 21
    ".....KKK.KOFFFFFFFFFFFFTTFFFFFFFFFFFFFK.KKK.....", // 22
    "..........KFFFFFFFFFKFFKKFFKFFFFFFFFFF..........", // 23
    ".......K...FFFFFFFFFFKKFFKKFFFFFFFFFF...K.......", // 24
    ".....KK.....FFFFFFFFFFFFFFFFFFFFFFFF.....KK.....", // 25
    "...KK........KKffffFFFFFFFFFFffffKK........KK...", // 26
    "...............KKKKffffffffffKKKK...............", // 27
    ".................KKKKKKKKKKKKKK.................", // 28
    "................KPPPPPPPPPPPPPPK........KK......", // 29
    "..............KKFppppppppppppppFKK.....KOOK.....", // 30
    ".............KFKfFFFFFFbbFFFFFFfKFK...KOOOOK....", // 31
    "............KFFFKFFFFFFbbFFFFFFKFFFK..KOOOOK....", // 32
    "...........KFFuFKfuFFFFFFFFFFFfKFFFFK..KOOOOK...", // 33
    "...........KFFuFuKFFFFFFFFFFFFKFFFFFK..KOOOOK...", // 34
    "...........KFFFFFKFFFFFFFFFFFFKFFFFFK..KFFFFK...", // 35
    "...........KFFFFFKFFFFFFFFFFFFKFFFFFK..KFFFfK...", // 36
    "...........KFFFFfKFFFFFFFFOOOOKfFFFFK.KFFFFK....", // 37
    "...........KfFFFKFFFFFFFFOOOOOOKFFFfKKFFFFFK....", // 38
    "............KfFfKFFFFFFFFOOOOOOKfFfKKFFFFFfK....", // 39
    ".............KfKffffffFFFOOOOOOfKfKFFFFFffK.....", // 40
    "..............KfKKKKKKfFFfKKKKKKfKFFFFFfKK......", // 41
    "...............KFFFFFFKffKFFFFFFKfFFFFfK........", // 42
    "..............KFFFFFFFFKKFFFFFFFFKffffK.........", // 43
    "..............KFFFFFFFFKKFFFFFFFFKKKKK..........", // 44
    "..............KfFFFFFFfKKfFFFFFFfK..............", // 45
    "...............KffffffK..KffffffK...............", // 46
    "................KKKKKK....KKKKKK................", // 47
  ],
  point: [
    "................................................", // 00
    "................................................", // 01
    ".........KK..........................KK.........", // 02
    "........KFFKKK....................KKKFFK........", // 03
    "........KFFFFFKK................KKFFFFFK........", // 04
    "........KFFOFFFFKK............KKFFFFFFFK........", // 05
    "........KFOTTFFFFFKKKKKKKKKKKKFFFFFTTFFK........", // 06
    "........KFOTTTTFFFFFFFFFFFFFFFFFFTTTTFFK........", // 07
    ".......KFFOTTTTTFFFFFFFFFFFFFFFOTTTTTFFFK.......", // 08
    ".......KFFFTTTTFFuuuuFFFFFFFFFOOOTTTTFFFK.......", // 09
    ".......KFFFTTFFuuFFFFFFFFFFFFFOOOOOTTFFFK.......", // 10
    ".......KFFFFFFFFFFFFFFFFFFFFFFOOOOOOOFFFK.......", // 11
    ".......KFFFFFFuFKFFFFFFFFFFFFFFKOOOOFFFFK.......", // 12
    ".......KFFFFFFKKYKKFFFFFFFFFFKKYKKFFFFFFK.......", // 13
    ".......KFFFFFKYYYYYKFFFFFFFFKYYYYYKFFFFFK.......", // 14
    ".......KFFFFKYWWQYYYKFFFFFFKYWWQYYYKFFFFK.......", // 15
    ".......KFFFFKYWYQYYYKFFFFFFKYWYQYYYKFFFFK.......", // 16
    ".......KFFFFKYYYQYYYKFFFFFFKYYYQYYYKFFFFK.......", // 17
    ".......KFFFFKYYYQYYYKFFFFFFKYYYQYYYKFFFFK.......", // 18
    ".......KFFFFKYYYQYYYKFFFFFFKYYYQYYYKFFFFK.......", // 19
    ".......KKKKfKYYYQYYYKFFFFFFKYYYQYYYKFFFfK.......", // 20
    "...KK..KFKFKOKyyQyWKFFFFFFFFKyyQyWKFFFfK...KK...", // 21
    ".....KKFFFFFKOKyyyKFFFFTTFFFFKyyyKFFFfK.KKK.....", // 22
    "......KKFFFFFKFKKKFFKFFKKFFKFFKKKFFFfK..........", // 23
    ".....KFFFFFFFKFFFFFFFKKFFKKFFFFFFFFfK...K.......", // 24
    ".....KFFFFFFFKfFFFFFFFFFFFFFFFFFFffK.....KK.....", // 25
    "...KKKfFFTTFFKKffffFFFFFFFFFFffffKK........KK...", // 26
    "......KFFTTFfK.KKKKffffffffffKKKK...............", // 27
    "......KfFFFfKK...KKKKKKKKKKKKKK.................", // 28
    ".......KfffKFFK.KPPPPPPPPPPPPPPK........KK......", // 29
    "........KKKFFFFKFppppppppppppppFKK.....KOOK.....", // 30
    "..........KFFFFFKFFFFFFbbFFFFFFfKFK...KOOOOK....", // 31
    ".........KFFFFFFKFFFFFFbbFFFFFFKFFFK..KOOOOK....", // 32
    "..........KFFFFFKuuFFFFFFFFFFFfKFFFFK..KOOOOK...", // 33
    "..........KFFFFKuFFFFFFFFFFFFFKFFFFFK..KOOOOK...", // 34
    "...........KFFKFFuFFFFFFFFFFFFKFFFFFK..KFFFFK...", // 35
    "............KKFFFFFFFFFFFFFFFFKFFFFFK..KFFFfK...", // 36
    ".............KFFFFFFFFFFFFOOOOKfFFFFK.KFFFFK....", // 37
    ".............KfFFFFFFFFFFOOOOOOKFFFfKKFFFFFK....", // 38
    "..............KFFFFFFFFFFOOOOOOKfFfKKFFFFFfK....", // 39
    "..............KFffffffFFFOOOOOOfKfKFFFFFffK.....", // 40
    "..............KfKKKKKKfFFfKKKKKKfKFFFFFfKK......", // 41
    "...............KFFFFFFKffKFFFFFFKfFFFFfK........", // 42
    "..............KFFFFFFFFKKFFFFFFFFKffffK.........", // 43
    "..............KFFFFFFFFKKFFFFFFFFKKKKK..........", // 44
    "..............KfFFFFFFfKKfFFFFFFfK..............", // 45
    "...............KffffffK..KffffffK...............", // 46
    "................KKKKKK....KKKKKK................", // 47
  ],
  pointBlink: [
    "................................................", // 00
    "................................................", // 01
    ".........KK..........................KK.........", // 02
    "........KFFKKK....................KKKFFK........", // 03
    "........KFFFFFKK................KKFFFFFK........", // 04
    "........KFFOFFFFKK............KKFFFFFFFK........", // 05
    "........KFOTTFFFFFKKKKKKKKKKKKFFFFFTTFFK........", // 06
    "........KFOTTTTFFFFFFFFFFFFFFFFFFTTTTFFK........", // 07
    ".......KFFOTTTTTFFFFFFFFFFFFFFFOTTTTTFFFK.......", // 08
    ".......KFFFTTTTFFuuuuFFFFFFFFFOOOTTTTFFFK.......", // 09
    ".......KFFFTTFFuuFFFFFFFFFFFFFOOOOOTTFFFK.......", // 10
    ".......KFFFFFFFFFFFFFFFFFFFFFFOOOOOOOFFFK.......", // 11
    ".......KFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFK.......", // 12
    ".......KFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFK.......", // 13
    ".......KFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFK.......", // 14
    ".......KFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFK.......", // 15
    ".......KFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFK.......", // 16
    ".......KFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFK.......", // 17
    ".......KFFFFKFFFFFFFKFFFFFFKFFFFFFFKFFFFK.......", // 18
    ".......KFFFFFKKKKKKKFFFFFFFFKKKKKKKFFFFFK.......", // 19
    ".......KKKKfFFFFFFFFFFFFFFFFFFFFFFFFFFFfK.......", // 20
    "...KK..KFKFKfFFFFFFFFFFFFFFFFFFFFFFFFFfK...KK...", // 21
    ".....KKFFFFFKfFFFFFFFFFTTFFFFFFFFFFFFFK.KKK.....", // 22
    "......KKFFFFFKFFFFFFKFFKKFFKFFFFFFFFFF..........", // 23
    ".....KFFFFFFFKFFFFFFFKKFFKKFFFFFFFFFF...K.......", // 24
    ".....KFFFFFFFKfFFFFFFFFFFFFFFFFFFFFF.....KK.....", // 25
    "...KKKfFFTTFFKKffffFFFFFFFFFFffffKK........KK...", // 26
    "......KFFTTFfK.KKKKffffffffffKKKK...............", // 27
    "......KfFFFfKK...KKKKKKKKKKKKKK.................", // 28
    ".......KfffKFFK.KPPPPPPPPPPPPPPK........KK......", // 29
    "........KKKFFFFKFppppppppppppppFKK.....KOOK.....", // 30
    "..........KFFFFFKFFFFFFbbFFFFFFfKFK...KOOOOK....", // 31
    ".........KFFFFFFKFFFFFFbbFFFFFFKFFFK..KOOOOK....", // 32
    "..........KFFFFFKuuFFFFFFFFFFFfKFFFFK..KOOOOK...", // 33
    "..........KFFFFKuFFFFFFFFFFFFFKFFFFFK..KOOOOK...", // 34
    "...........KFFKFFuFFFFFFFFFFFFKFFFFFK..KFFFFK...", // 35
    "............KKFFFFFFFFFFFFFFFFKFFFFFK..KFFFfK...", // 36
    ".............KFFFFFFFFFFFFOOOOKfFFFFK.KFFFFK....", // 37
    ".............KfFFFFFFFFFFOOOOOOKFFFfKKFFFFFK....", // 38
    "..............KFFFFFFFFFFOOOOOOKfFfKKFFFFFfK....", // 39
    "..............KFffffffFFFOOOOOOfKfKFFFFFffK.....", // 40
    "..............KfKKKKKKfFFfKKKKKKfKFFFFFfKK......", // 41
    "...............KFFFFFFKffKFFFFFFKfFFFFfK........", // 42
    "..............KFFFFFFFFKKFFFFFFFFKffffK.........", // 43
    "..............KFFFFFFFFKKFFFFFFFFKKKKK..........", // 44
    "..............KfFFFFFFfKKfFFFFFFfK..............", // 45
    "...............KffffffK..KffffffK...............", // 46
    "................KKKKKK....KKKKKK................", // 47
  ],
  walkA: [
    "................................................", // 00
    "................................................", // 01
    ".........KK..........................KK.........", // 02
    "........KFFKKK....................KKKFFK........", // 03
    "........KFFFFFKK................KKFFFFFK........", // 04
    "........KFFOFFFFKK............KKFFFFFFFK........", // 05
    "........KFOTTFFFFFKKKKKKKKKKKKFFFFFTTFFK........", // 06
    "........KFOTTTTFFFFFFFFFFFFFFFFFFTTTTFFK........", // 07
    ".......KFFOTTTTTFFFFFFFFFFFFFFFOTTTTTFFFK.......", // 08
    ".......KFFFTTTTFFuuuuFFFFFFFFFOOOTTTTFFFK.......", // 09
    ".......KFFFTTFFuuFFFFFFFFFFFFFOOOOOTTFFFK.......", // 10
    ".......KFFFFFFFFFFFFFFFFFFFFFFOOOOOOOFFFK.......", // 11
    ".......KFFFFFFuFKFFFFFFFFFFFFFFKOOOOFFFFK.......", // 12
    ".......KFFFFFFKKYKKFFFFFFFFFFKKYKKFFFFFFK.......", // 13
    ".......KFFFFFKYYYYYKFFFFFFFFKYYYYYKFFFFFK.......", // 14
    ".......KFFFFKYWWQYYYKFFFFFFKYWWQYYYKFFFFK.......", // 15
    ".......KFFFFKYWYQYYYKFFFFFFKYWYQYYYKFFFFK.......", // 16
    ".......KFFFFKYYYQYYYKFFFFFFKYYYQYYYKFFFFK.......", // 17
    ".......KFFFFKYYYQYYYKFFFFFFKYYYQYYYKFFFFK.......", // 18
    ".......KFFFFKYYYQYYYKFFFFFFKYYYQYYYKFFFFK.......", // 19
    ".......KfFFFKYYYQYYYKFFFFFFKYYYQYYYKFFFfK.......", // 20
    "...KK...KfFOOKyyQyWKFFFFFFFFKyyQyWKFFFfK...KK...", // 21
    ".....KKK.KOOOOKyyyKFFFFTTFFFFKyyyKFFFfK.KKK.....", // 22
    "..........KOOOFKKKFFKFFKKFFKFFKKKFFFfK..........", // 23
    ".......K...KfFFFFFFFFKKFFKKFFFFFFFFfK...K.......", // 24
    ".....KK.....KffFFFFFFFFFFFFFFFFFFffK.....KK.....", // 25
    "...KK........KKffffFFFFFFFFFFffffKK........KK...", // 26
    "...............KKKKffffffffffKKKK...............", // 27
    ".................KKKKKKKKKKKKKK.................", // 28
    "................KPPPPPPPPPPPPPPK........KK......", // 29
    "..............KKFppppppppppppppFKK.....KOOK.....", // 30
    ".............KFKfFFFFFFbbFFFFFFfKFK...KOOOOK....", // 31
    "............KFFFKFFFFFFbbFFFFFFKFFFK..KOOOOK....", // 32
    "...........KFFuFKfuFFFFFFFFFFFfKFFFFK..KOOOOK...", // 33
    "...........KFFuFuKFFFFFFFFFFFFKFFFFFK..KOOOOK...", // 34
    "...........KFFFFFKFFFFFFFFFFFFKFFFFFK..KFFFFK...", // 35
    "...........KFFFFFKFFFFFFFFFFFFKFFFFFK..KFFFfK...", // 36
    "...........KFFFFfKFFFFFFFFOOOOKfFFFFK.KFFFFK....", // 37
    "...........KfFFFKfffffFFFOOOOOOKFFFfKKFFFFFK....", // 38
    "............KfFfKKKKKKfFFOOOOOOKfFfKKFFFFFfK....", // 39
    ".............KfKFFFFFFKfFOOOOOOfKfKFFFFFffK.....", // 40
    "..............KFFFFFFFFKFfKKKKKKfKFFFFFfKK......", // 41
    "..............KFFFFFFFFKfKFFFFFFKfFFFFfK........", // 42
    "..............KfFFFFFFfKKFFFFFFFFKffffK.........", // 43
    "...............KffffffKKKFFFFFFFFKKKKK..........", // 44
    "................KKKKKK..KfFFFFFFfK..............", // 45
    ".........................KffffffK...............", // 46
    "..........................KKKKKK................", // 47
  ],
  walkB: [
    "................................................", // 00
    "................................................", // 01
    ".........KK..........................KK.........", // 02
    "........KFFKKK....................KKKFFK........", // 03
    "........KFFFFFKK................KKFFFFFK........", // 04
    "........KFFOFFFFKK............KKFFFFFFFK........", // 05
    "........KFOTTFFFFFKKKKKKKKKKKKFFFFFTTFFK........", // 06
    "........KFOTTTTFFFFFFFFFFFFFFFFFFTTTTFFK........", // 07
    ".......KFFOTTTTTFFFFFFFFFFFFFFFOTTTTTFFFK.......", // 08
    ".......KFFFTTTTFFuuuuFFFFFFFFFOOOTTTTFFFK.......", // 09
    ".......KFFFTTFFuuFFFFFFFFFFFFFOOOOOTTFFFK.......", // 10
    ".......KFFFFFFFFFFFFFFFFFFFFFFOOOOOOOFFFK.......", // 11
    ".......KFFFFFFuFKFFFFFFFFFFFFFFKOOOOFFFFK.......", // 12
    ".......KFFFFFFKKYKKFFFFFFFFFFKKYKKFFFFFFK.......", // 13
    ".......KFFFFFKYYYYYKFFFFFFFFKYYYYYKFFFFFK.......", // 14
    ".......KFFFFKYWWQYYYKFFFFFFKYWWQYYYKFFFFK.......", // 15
    ".......KFFFFKYWYQYYYKFFFFFFKYWYQYYYKFFFFK.......", // 16
    ".......KFFFFKYYYQYYYKFFFFFFKYYYQYYYKFFFFK.......", // 17
    ".......KFFFFKYYYQYYYKFFFFFFKYYYQYYYKFFFFK.......", // 18
    ".......KFFFFKYYYQYYYKFFFFFFKYYYQYYYKFFFFK.......", // 19
    ".......KfFFFKYYYQYYYKFFFFFFKYYYQYYYKFFFfK.......", // 20
    "...KK...KfFOOKyyQyWKFFFFFFFFKyyQyWKFFFfK...KK...", // 21
    ".....KKK.KOOOOKyyyKFFFFTTFFFFKyyyKFFFfK.KKK.....", // 22
    "..........KOOOFKKKFFKFFKKFFKFFKKKFFFfK..........", // 23
    ".......K...KfFFFFFFFFKKFFKKFFFFFFFFfK...K.......", // 24
    ".....KK.....KffFFFFFFFFFFFFFFFFFFffK.....KK.....", // 25
    "...KK........KKffffFFFFFFFFFFffffKK........KK...", // 26
    "...............KKKKffffffffffKKKK...............", // 27
    ".................KKKKKKKKKKKKKK.................", // 28
    "................KPPPPPPPPPPPPPPK........KK......", // 29
    "..............KKFppppppppppppppFKK.....KOOK.....", // 30
    ".............KFKfFFFFFFbbFFFFFFfKFK...KOOOOK....", // 31
    "............KFFFKFFFFFFbbFFFFFFKFFFK..KOOOOK....", // 32
    "...........KFFuFKfuFFFFFFFFFFFfKFFFFK..KOOOOK...", // 33
    "...........KFFuFuKFFFFFFFFFFFFKFFFFFK..KOOOOK...", // 34
    "...........KFFFFFKFFFFFFFFFFFFKFFFFFK..KFFFFK...", // 35
    "...........KFFFFFKFFFFFFFFFFFFKFFFFFK..KFFFfK...", // 36
    "...........KFFFFfKFFFFFFFFOOOOKfFFFFK.KFFFFK....", // 37
    "...........KfFFFKFFFFFFFFOOOOOOKFFFfKKFFFFFK....", // 38
    "............KfFfKFFFFFFFFOKKKKKKfFfKKFFFFFfK....", // 39
    ".............KfKffffffFFfKOOOOOFKfKFFFFFffK.....", // 40
    "..............KfKKKKKKfFKFOOOOFFFKFFFFFfKK......", // 41
    "...............KFFFFFFKfKFFFFFFFFKFFFFfK........", // 42
    "..............KFFFFFFFFKKfFFFFFFfKffffK.........", // 43
    "..............KFFFFFFFFKKKffffffK.KKKK..........", // 44
    "..............KfFFFFFFfK..KKKKKK................", // 45
    "...............KffffffK.........................", // 46
    "................KKKKKK..........................", // 47
  ],
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
