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

  const captureHandful = sequence(
    space,
    captureAnyColor,
    optional(
      nOrMore(
        1,
        sequence(
          string(", "),
          captureAnyColor
        )
      )
    ),
    char(";")
  );

  // Virker fint:
  console.log(captureHandful(" 9 green, 5 red;"));
  console.log(captureHandful(" 9 green;"));
  console.log(captureHandful(" 9 red, 5 green, 3 blue;"));

  // Game 99: 2 green, 9 red; 8 red, 4 green, 9 blue; 8 blue, 13 red; 10 green, 8 blue, 6 red; 11 green, 2 red, 13 blue
  capture
}
