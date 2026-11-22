/**
 * Which character the site shows. Both live in their own module with the same API:
 *   "cat"  → sprites.cat.ts  (black cat / white spotted cat, follows the theme)
 *   "girl" → sprites.girl.ts (Amanda, chibi)
 * Change CHARACTER to swap the mascot everywhere (hero, floating walker, chat avatar, about card).
 */
import * as cat from "./sprites.cat";
import * as girl from "./sprites.girl";
import type { SpritePath } from "./sprites.cat";

export const CHARACTER: "cat" | "girl" = "cat";

const active = CHARACTER === "cat" ? cat : girl;

export const SPRITE_WIDTH = active.SPRITE_WIDTH;
export const SPRITE_HEIGHT = active.SPRITE_HEIGHT;
export const HEAD_BOX = active.HEAD_BOX;
export const rasterize: (frame: SpriteFrame) => SpritePath[] = active.rasterize;

export type { SpritePath } from "./sprites.cat";
/** Pose names shared by both characters. */
export type SpriteFrame = keyof typeof cat.FRAMES & keyof typeof girl.FRAMES;
