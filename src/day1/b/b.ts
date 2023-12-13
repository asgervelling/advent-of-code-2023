import * as fs from "fs";
import * as readline from "readline";

function isNumeric(s: string) {
  return s !== "" && !isNaN(Number(s));
}

export function getCalibrationValue(line_: string): number {
  const line = replace(line_);
  const n = line.length;
  let l = 0;
  let r = n - 1;
  while (l < r) {
    if (isNumeric(line[l]) && isNumeric(line[r])) break;
    if (!isNumeric(line[l])) l++;
    if (!isNumeric(line[r])) r--;
  }
  if (isNumeric(line[l]) && isNumeric(line[r])) {
    return parseInt(line[l] + line[r]);
  }
  return 0;
}

function replace(s: string) {
  return s
    .replace(/one/g, "o1e")
    .replace(/two/g, "t2e")
    .replace(/three/g, "t3e")
    .replace(/four/g, "f4r")
    .replace(/five/g, "f5e")
    .replace(/six/g, "s6x")
    .replace(/seven/g, "s7n")
    .replace(/eight/g, "e8t")
    .replace(/nine/g, "n9e");
}

if (require.main === module) {
  // This block will only run if the script is executed directly, not when imported as a module
  const lineReader = readline.createInterface({
    input: fs.createReadStream("input"),
    crlfDelay: Infinity,
  });

  let total = 0;
  lineReader.on("line", (line) => {
    total += getCalibrationValue(line);
  });

  lineReader.on("close", () => {
    console.log(`Total: ${total}`);
  });
}
