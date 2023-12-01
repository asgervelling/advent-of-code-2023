"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const readline = __importStar(require("readline"));
function isNumeric(s) {
    return s !== "" && !isNaN(Number(s));
}
function getCalibrationValue(line) {
    const n = line.length;
    let l = 0;
    let r = n - 1;
    while (l < r) {
        if (isNumeric(line[l]) && isNumeric(line[r]))
            break;
        if (!isNumeric(line[l]))
            l++;
        if (!isNumeric(line[r]))
            r--;
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
