import { expect, it } from "vitest";
import { Sum } from "./math";

it("Should yield the expected sum of numbers", async () => {
  //Arrange
  const numbers: number[] = [1, 3];
  const expectedResult = 4;
  //Act
  const result = Sum(numbers);
  //Assert
  expect(result).toEqual(expectedResult);
});
it("Should transform a string number to a number of type number", async () => {
  //Arrange
  const numbers = ["1", "3"];
  const expectedResult = 4;
  //Act
  const result = Sum(numbers);
  //Assert
  expect(result).toBe(expectedResult);
});
