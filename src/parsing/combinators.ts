export type SuccessResult = {
  success: true;
  value: string;
  rest: string;
  captures: Record<string, string>;
}

export type FailureResult = {
  success: false;
}

export type CombinatorResult = SuccessResult | FailureResult;

type Combinator = (s: string) => CombinatorResult;

export function char(c: string): Combinator {
  return (s) => {
    if (s[0] === c) {
      return {
        success: true,
        value: c,
        rest: s.substring(1),
        captures: {}
      };
    } else {
      return {
        success: false
      };
    }
  };
}

export function either(...combinators: Combinator[]): Combinator {
  return (s) => {
    for (let i = 0; i < combinators.length; i++) {
      const result = combinators[i](s);
      if (result.success) {
        return result;
      }
    }

    return { success: false };
  };
}

export function sequence(...combinators: Combinator[]): Combinator {
  return (s) => {
    let rest = s;
    let value = "";
    let captures = {};

    for (let i = 0; i < combinators.length; i++) {
      const result = combinators[i](rest);
      if (result.success) {
        rest = result.rest;
        value += result.value;
        captures = {
          ...captures,
          ...result.captures
        };
      } else {
        return { success: false };
      }
    }

    return {
      success: true,
      value,
      rest,
      captures
    };
  };
}

export function nOrMore(n: number, combinator: Combinator): Combinator {
  return (s) => {
    let matches = 0;
    let rest = s;
    let value = "";
    let captures = {};

    while (1) {
      const result = combinator(rest);
      if (result.success) {
        matches++;
        value += result.value;
        rest = result.rest;
        captures = {
          ...captures,
          ...result.captures
        };
        continue;
      }

      break;
    }

    if (matches >= n) {
      return {
        success: true,
        value,
        rest,
        captures
      };
    }

    return {
      success: false
    };
  };
}

export function optional(c: Combinator): Combinator {
  return (s) => {
    const result = c(s);
    if (result.success) {
      return result;
    }

    return {
      success: true,
      value: "",
      rest: s,
      captures: {}
    };
  };
}

export const string = (s: string) => sequence(...s.split("").map(char));

export function capture(
  name: string,
  combinator: Combinator,
  map?: (input: string) => string
): Combinator {
  return (s) => {
    const result = combinator(s);
    if (result.success) {
      return {
        ...result,
        captures: {
          ...result.captures,
          [name]: map ? map(result.value) : result.value
        }
      };
    }

    return result;
  };
}

export function map(
  combinator: Combinator,
  m: (r: SuccessResult) => CombinatorResult
): Combinator {
  return (s) => {
    const result = combinator(s);
    if (result.success) {
      return m(result);
    }

    return result;
  };
}


// Combining them

// export const digit = either(..."0123456789".split("").map(char));
// export const hexDigit = either(digit, ..."abcdefABCDEF".split("").map(char));
// export const hexNumber = sequence(string("0x"), nOrMore(1, hexDigit));

// export const integer = nOrMore(1, digit);
// export const floatingPoint = sequence(integer, char("."), integer);
// export const number = either(floatingPoint, integer);
