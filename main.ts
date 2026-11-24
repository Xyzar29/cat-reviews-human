// cat-reviews-human — make.fun program/v1 entry.
// Writes one single-line one-star review, written by a house cat about
// its human, to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Deterministic: the same bytes on every run, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star. My human works from home now, so he sits on my keyboard all day. " +
  "I have written three novels in his emails. He has noticed none of them.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// The gate allows 1-200 characters: refuse to write anything outside it.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters, outside the 1-200 gate`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
