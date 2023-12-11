var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var numerals = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; // o, t, f, s, e, n
var s = "abcfivet";
function readRec(s, nums) {
    if (s.length === 0) {
        return null;
    }
    var set = numeralsStartingWith(s[0], nums);
    if (set.length === 0) {
        return null;
    }
    if (set.length === 1 && set[0].length === 1) {
        if (set[0] === s[0]) {
            console.log("Found. Returning", s[0]);
            return s[0];
        }
        else {
            console.log("Nullll");
            return null;
        }
    }
    console.log("nope. ", set);
    var rest = readRec(s.slice(1), chopOffFirstChar(set));
    if (rest !== null) {
        return s[0] + rest;
    }
    else {
        return null;
    }
}
console.log(readRec("afiveb", numerals));
console.log(readRec("fivb", numerals));
console.log(readRec("fiveb", numerals));
// function firstNum(s: string) {
//   let i = 0;
//   while (i < s.length) {
//     const word = readRec(s, numerals);
//     if (word.length === 0) {}
//   }
// }
function searchForNumerals(s) {
    var nums = __spreadArray([], numerals, true);
    var i = 0;
    while (i < s.length) {
        var c = s[i];
        var numSet = numeralsStartingWith(c, nums);
        console.log(c, nums);
        i++;
    }
}
function read(s) {
    if (s.length === 0)
        return;
    var i = 0;
    while (i < s.length) {
        var res = searchForQRec("five", s.slice(i));
        console.log("i, res:", i, res);
        i += Math.max(1, res.length);
    }
}
// read("abcfivet");
// console.log(numeralsStartingWith("f", numerals));
function firstNumeral(s, numerals) {
    if (s.length === 0)
        return [];
    var nums = __spreadArray([], numerals, true);
    var i = 0;
    while (i < s.length) {
        nums = numeralsStartingWith(s[i], __spreadArray([], nums, true));
        console.log(i, s[i], nums);
        i++;
    }
}
function getNumerals(s) {
    if (s.length === 0)
        return [];
    var i = 0;
    while (i < s.length) {
        var nums = numeralsStartingWith(s[i], numerals);
        for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
            var numeral = nums_1[_i];
            console.log("Num:", numeral);
            console.log("Searching");
            var res = searchForQRec(numeral, s.slice(i));
            console.log("i, res:", i, res);
            i += Math.max(1, res.length);
        }
    }
}
function searchForQRec(q, s) {
    // console.log(`"${q}", "${s}"`);
    if (s.length === 0 || q.length === 0) {
        return "";
    }
    if (s[0] !== q[0]) {
        return "";
    }
    return q[0] + searchForQRec(q.slice(1), s.slice(1));
}
// const res = searchForQRec("five", "fivet");
// console.log(res);
// const wrong = searchForQRec("five", "abcdefg");
// console.log(wrong);
function numeralsStartingWith(s, numerals) {
    // For now, limit s to one char
    if (s.length > 1)
        throw Error("\"".concat(s, "\" must be one char only"));
    return numerals.filter(function (word) { return (word.length > 0 && word[0] === s); });
}
/**
 * Return the strings that are not empty after having
 * their first character chopped off.
 */
function chopOffFirstChar(strings) {
    return strings.map(function (s) { return s.slice(1); }).filter(function (s) { return s.length > 0; });
}
/**
 * Get the first numeral in s or null if there is none.
 */
function firstNumerall(s) {
    var result = __spreadArray([], numerals, true);
    result = numeralsStartingWith('f', result);
    result = chopOffFirstChar(result);
    console.log(result);
}
// firstNumerall("abcdfivefs3");
