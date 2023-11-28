import { it, describe, vi, expect } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("should execute logFn if provided", () => {
    const logger = vi.fn((data: string) => {});
    generateReportData(logger);
    expect(logger).toBeCalledTimes(1);
  });
});
