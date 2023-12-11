const numerals = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; // o, t, f, s, e, n

const s = "abcfivet"


function readRec(s: string, nums: string[]): string | null {
  if (s.length === 0) {
    return null;
  }
  const set = numeralsStartingWith(s[0], nums);
  if (set.length === 0) {
    return null;
  }
  if (set.length === 1 && set[0].length === 1) {
    if (set[0] === s[0]) {
      console.log("Found. Returning", s[0]);
      return s[0];
    } else {
      console.log("Nullll");
      return null;
    }
  }
  console.log("nope. ", set);
  
  const rest = readRec(s.slice(1), chopOffFirstChar(set));

  if (rest !== null) {
    return s[0] + rest;
  } else {
    return null;
  }
}

function isNumeral(s: string, nums: string[]) {
  console.log(`isNumeral(${s}, [${nums.join(', ')}])`);
  if (s.length === 0) {
    console.log("No s");
    return false;
  }

  const set = numeralsStartingWith(s[0], nums);
  if (set.length === 0) {
    console.log("No numerals");
    return false;
  }
  
  return true && isNumeral(s.slice(1), set);
}

console.log(isNumeral("afivet", numerals));
console.log(isNumeral("fivb", numerals));
console.log(isNumeral("fiveb", numerals));
console.log(isNumeral("five", numerals));

// console.log(readRec("afiveb", numerals));
// console.log(readRec("fivb", numerals));
// console.log(readRec("fiveb", numerals));

// function firstNum(s: string) {
//   let i = 0;
//   while (i < s.length) {
//     const word = readRec(s, numerals);
//     if (word.length === 0) {}
//   }
// }


function searchForNumerals(s: string) {
  let nums = [...numerals];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    const numSet = numeralsStartingWith(c, nums);
    console.log(c, nums);
    i++;
  }
}


function read(s: string) {
  if (s.length === 0) return;

  let i = 0;
  while (i < s.length) {
    const res = searchForQRec("five", s.slice(i));
    console.log("i, res:", i, res);
    i += Math.max(1, res.length);
  }
}

function firstNumeral(s: string, numerals: string[]) {
  if (s.length === 0) return [];

  let nums = [...numerals];
  let i = 0;
  while (i < s.length) {
    nums = numeralsStartingWith(s[i], [...nums]);
    console.log(i, s[i], nums);
    i++;
  }
}

function getNumerals(s: string) {
  if (s.length === 0) return [];

  let i = 0;
  while (i < s.length) {
    const nums = numeralsStartingWith(s[i], numerals);
    for (const numeral of nums) {
      console.log("Num:", numeral);
      console.log("Searching");
      const res = searchForQRec(numeral, s.slice(i));
      console.log("i, res:", i, res);
      i += Math.max(1, res.length);
    }

  }
}

function searchForQRec(q: string, s: string): string {
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


























function numeralsStartingWith(s: string, numerals: string[]): string[] {
  // For now, limit s to one char
  if (s.length > 1) throw Error(`"${s}" must be one char only`);
  return numerals.filter((word) => (
    word.length > 0 && word[0] === s
  ));
}

/**
 * Return the strings that are not empty after having
 * their first character chopped off.
 */
function chopOffFirstChar(strings: string[]): string[] {
  return strings.map(s => s.slice(1)).filter(s => s.length > 0);
}

/**
 * Get the first numeral in s or null if there is none.
 */
function firstNumerall(s: string) {
  let result = [...numerals];
  result = numeralsStartingWith('f', result);
  result = chopOffFirstChar(result);
  console.log(result);
}

// firstNumerall("abcdfivefs3");