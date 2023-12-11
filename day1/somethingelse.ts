const numerals = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; // o, t, f, s, e, n
function numbersIn(s: string) {
  const replaced = s
    .replace("one", "o1e")
    .replace("two", "t2e")
    .replace("three", "t3e")
    .replace("four", "f4r")
    .replace("five", "f5e")
    .replace("six", "s6x")
    .replace("seven", "s7n")
    .replace("eight", "e8t")
    .replace("nine", "n9e");
  return Array.from(replaced)
    .map(Number)
    .filter(c => !isNaN(c));
}

function firstAndLastSum(l: number[]): number {
  if (l.length === 0) return 0;
  if (l.length === 1) return l[0] * 2;
  return l[0] + l[l.length - 1];
}

console.log(firstAndLastSum(numbersIn("afive6eightwofdsa89s")));