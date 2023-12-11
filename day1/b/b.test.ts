import { getCalibrationValue } from "./b";

describe('getCalibrationValue', () => {
  test('something', () => {
    expect(
      getCalibrationValue('hbtfjlnplcsrxkt6rcqpfdseveneightwoh'))
      .toBe(62);
    expect(getCalibrationValue('266')).toBe(26);
    expect(getCalibrationValue('two1nine')).toBe(29);
    expect(getCalibrationValue('eightwothree')).toBe(83);
    expect(getCalibrationValue('abcone2threexyz')).toBe(13);
    expect(getCalibrationValue('xtwone3four')).toBe(24);
    expect(getCalibrationValue('4nineeightseven2')).toBe(42);
    expect(getCalibrationValue('zoneight234')).toBe(14);
    expect(getCalibrationValue('7pqrstsixteen')).toBe(76);
  });
});