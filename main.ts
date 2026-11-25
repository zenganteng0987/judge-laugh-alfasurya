import { mkdirSync, writeFileSync } from "node:fs";

// Competition gate: one line, max 200 characters.
const entry =
  "Our printer only jams when the deadline is today, which is how I know it reads the calendar better than my manager does.";

if (entry.length > 200) {
  throw new Error(`entry too long: ${entry.length} characters (max 200)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
