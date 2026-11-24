// The Robot Apology — Frost entry for make.fun
// Writes a two-line robot confession to /output/entry.txt:
// line one owns one specific mistake, line two names the lesson and the fix.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = [
  "I am sorry — I sorted your laundry by colour and still washed your favourite white shirt with a red sock.",
  "I have learned to read every label before the spin cycle, so from now on each load gets a colour check first.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate guard: two lines, 1–400 characters, never only whitespace.
const lines = entry.split("\n");
if (lines.length !== 2 || entry.length < 1 || entry.length > 400 || entry.trim().length === 0) {
  throw new Error("entry failed the gate: expected exactly two lines within 1–400 characters");
}
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
