import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Our printer only jams when the deadline is today, which is how I know it reads the calendar better than my manager does.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
