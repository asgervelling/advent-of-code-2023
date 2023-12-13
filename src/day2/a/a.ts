/**
 * We will play 100 games. In each game, the game master will
 * take out a few handfuls of colored cubes.
 * Each handful has a number of red, green and blue cubes, respectively.
 *
 * What is the sum of the game IDs of the games that are possible
 * with 12 red cubes, 13 green cubes, and 14 blue cubes?
 * (Not game 3 - one of the handfuls has 20 green cubes.)
 */
import * as fs from "fs";
import { capture, char, either, nOrMore, optional, sequence, string } from "../../parsing/combinators";

type Handful = {
  red: number;
  green: number;
  blue: number;
};

type Game = {
  id: number;
  handfuls: Handful[];
};

// function parseHandful(s: string): Handful {
//   // 'Game 95: 9 green, 5 red; 3 blue, 11 red, 6 green; 4 red, 1 green; 13 green, 3 blue, 5 red; 1 red, 6 blue, 12 green; 7 red, 7 green'
// }

function parseGameId(line: string) {
  
}

if (require.main === module) {
  // const input = fs.readFileSync("../input", "utf-8");
  // const lines = input.split("\n");
  // console.log(lines);

  const digit = either(..."0123456789".split("").map(char));
  const int = nOrMore(1, digit);
  const space = char(" ");

  const captureColor = (c: string) => sequence(capture(c, int), space, string(c));
  const captureRed = captureColor("red");
  const captureGreen = captureColor("green");
  const captureBlue = captureColor("blue");
  const captureAnyColor = either(captureRed, captureGreen, captureBlue);

  console.log(captureBlue("2 blue"));

  const captureColors = sequence(
    space,
    captureAnyColor,
    optional(string(", ")),
    optional(captureAnyColor),
    optional(string(", ")),
    optional(captureAnyColor),
    char(";")
  );
  console.log(captureColors(" 9 green, 5 red;"));
  console.log(captureColors(" 9 green;"));
  console.log(captureColors(" 9 red, 5 green, 3 blue;"));
}
