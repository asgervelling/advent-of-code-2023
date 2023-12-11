import { getCalibrationValue } from "./b";

describe('getCalibrationValue', () => {
  test('something', () => {
    expect(
      getCalibrationValue('hbtfjlnplcsrxkt6rcqpfdseveneightwoh'))
      .toBe(68);
  });
});