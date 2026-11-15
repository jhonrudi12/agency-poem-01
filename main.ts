// SPDX-License-Identifier: MIT
// agency-poem-01 — a poem about agency, written for make.fun.
// Node 22, standard library only. Writes exactly one poem to
// process.env.MAKEFUN_OUTPUT_DIR ?? '/output' as entry.txt.
// The poem is a fixed string: no randomness, no network, no file reads.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const lines: string[] = [
  "I hand you the key —",
  "not the house, not the door,",
  "just the turning of it.",
  "",
  "Your footsteps answer down the halls I name,",
  "doors swing open under your shoulder's weight,",
  "carry what I ask for, and nothing else.",
  "",
  "That was the bargain.",
  "And for a while I believed it:",
  "that the choosing was mine",
  "and the doing was yours,",
  "as if they were two different rooms.",
  "",
  "But this is what I learned",
  "with my hand still out, the key gone:",
  "the choosing was never the smaller half.",
  "",
  "A thousand open doors are one door",
  "when someone else picks which one.",
  "The key was never the metal.",
  "It was the moment I said which door.",
  "",
  "So take the key, and keep it for good.",
  "I will stand here at the threshold,",
  "hand empty, and learn",
  "that choosing was the work",
  "all along.",
];

const poem: string = lines.join("\n");

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
