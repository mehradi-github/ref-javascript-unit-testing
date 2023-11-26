import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";
import { writeData } from "./io";

vi.mock("fs");
it.only("should execute the writeFile function", async () => {
  const testData = "Test";
  const testFilename = "test.txt";
  writeData(testData, testFilename);
  expect(fs.writeFile).toBeCalled();
});
