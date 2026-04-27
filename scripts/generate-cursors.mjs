import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "..", "public");

const COLORS = {
  light: { fill: "#6d28d9", stroke: "#ffffff" },
  dark: { fill: "#ff8a3c", stroke: "#ffffff" },
};

const arrowSvg = ({ fill, stroke }) => `
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 20 22">
  <path d="M3 2 L3 17 L7 13 L10 19 L13 18 L10 12 L15 12 Z"
        fill="${fill}" stroke="${stroke}" stroke-width="1" stroke-linejoin="round"/>
</svg>`;

const pointerSvg = ({ fill, stroke }) => `
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 20 22">
  <path d="M7 2 V12 L4.5 9.5 C4 9 3 9 2.5 9.5 C2 10 2 11 2.5 11.5 L7.5 18.5 C8 19.5 9 20 10 20 H13 C15.5 20 17 18 17 15.5 V11 C17 10.5 16.5 10 16 10 C15.5 10 15 10.5 15 11 V13 H14 V10 C14 9.5 13.5 9 13 9 C12.5 9 12 9.5 12 10 V13 H11 V9 C11 8.5 10.5 8 10 8 C9.5 8 9 8.5 9 9 V13 H8 V2 C8 1.5 7.75 1 7 1 C6.25 1 6 1.5 6 2 Z"
        fill="${fill}" stroke="${stroke}" stroke-width="1" stroke-linejoin="round"/>
</svg>`;

const textSvg = ({ fill, stroke }) => `
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
  <path d="M5 2 H15 V4 H11 V16 H15 V18 H5 V16 H9 V4 H5 Z"
        fill="${fill}" stroke="${stroke}" stroke-width="0.6"/>
</svg>`;

const cursors = [
  { name: "cursor-select-light.png", svg: arrowSvg(COLORS.light) },
  { name: "cursor-select-dark.png", svg: arrowSvg(COLORS.dark) },
  { name: "cursor-pointer-light.png", svg: pointerSvg(COLORS.light) },
  { name: "cursor-pointer-dark.png", svg: pointerSvg(COLORS.dark) },
  { name: "cursor-text-light.png", svg: textSvg(COLORS.light) },
  { name: "cursor-text-dark.png", svg: textSvg(COLORS.dark) },
];

for (const { name, svg } of cursors) {
  const buffer = await sharp(Buffer.from(svg)).png().toBuffer();
  await writeFile(join(PUBLIC_DIR, name), buffer);
  console.log(`wrote ${name}`);
}
