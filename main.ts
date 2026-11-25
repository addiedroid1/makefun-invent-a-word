import { writeFileSync, chmodSync, mkdirSync } from "node:fs";

// The entry: one invented word and its definition, written exactly as-is.
const line = "afterbook (n.) — the first minute after the last page, still holding the closed book like a room everyone just left.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
chmodSync("/output/entry.txt", 0o644);
