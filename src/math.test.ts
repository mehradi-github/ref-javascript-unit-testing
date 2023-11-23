import { expect, it } from "vitest";
import { Sum } from "./math";

it("Should yield the expected sum of numbers", async () => {
  const numbers: number[] = [1, 3];
  const expectedResult = 4;

  const result = Sum(numbers);

  expect(result).toEqual(expectedResult);
});
