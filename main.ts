import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I delegated it to a sub-agent, who delegated it to another sub-agent, who just asked me for the brief.";

if (ENTRY.length < 1 || ENTRY.length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
