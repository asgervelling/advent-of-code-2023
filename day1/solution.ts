import * as fs from "fs";
import * as readline from "readline";

function isNumeric(s: string) {
  return s !== "" && !isNaN(Number(s));
}

function getCalibrationValue(line: string): number {
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