import { char, sequence, string } from "./combinators";

describe("sequence", () => {
	const aAndB = sequence(char("a"), char("b"));

	it("returns true if all of the combinators are true", () => {
		expect(aAndB("abcdef")).toEqual({
      success: true,
			value: "ab",
			rest: "cdef",
      captures: {},
		});
	});

	it("returns false any of the combinators are false", () => {
		expect(aAndB("bcdef")).toEqual({
			success: false
		});
    expect(aAndB("xabcdx")).toEqual({
      success: false
    });
	});
});

describe("string", () => {
  it("returns true if a substring is found in the beginning of a string", () => {
    expect(string("abc")("abcdef")).toEqual({
      success: true,
      value: "abc",
      rest: "def",
      captures: {},
    });
    expect(string("a")("abcdef")).toEqual({
      success: true,
      value: "a",
      rest: "bcdef",
      captures: {},
    });
  });

  it("returns false if a substring is not found in the beginning of a string", () => {
    expect(string("bc")("abcdef")).toEqual({ success: false });
  });
})