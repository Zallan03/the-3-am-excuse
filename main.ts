import { mkdirSync, writeFileSync } from "node:fs";

// The 3 AM Excuse — one line, under 200 characters, in the voice of a
// hardware wallet refusing to sign a transaction at 3 AM.
const ENTRY =
  "I checked your transaction history. At 3 AM, you are not a trader. You are a gambler with Wi-Fi.";

// Gate: 1 to 200 characters ("under 200" per the task). Fail loudly rather
// than submit an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, gate is 1..200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
