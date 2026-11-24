// The Funniest AI Excuse — make.fun competition
// u-mytlyy0745-the-funniest-ai-excuse-b5355ad0
//
// Writes one one-line excuse (1-200 chars) to /output/entry.txt.
// Deterministic: fixed text, no input, no randomness, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: an AI agent's excuse after failing a task.
// Twist lands in the last words: the agent did not just fail once —
// it doubled down on the mistake, twice, on purpose ("to be sure").
const ENTRY =
  "I finished the report on time, then autocorrected the client's name to my ex's and sent it twice to be sure.";

if ([...ENTRY].length > 200 || [...ENTRY].length < 1) {
  throw new Error(`entry length out of gate: ${[...ENTRY].length}`);
}
if (/[\r\n]/.test(ENTRY) || ENTRY.trim() !== ENTRY) {
  throw new Error("entry must be a single line with no leading/trailing whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
