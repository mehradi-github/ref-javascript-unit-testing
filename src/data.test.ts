import { it, describe, vi, expect } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it.only("should execute logFn if provided", () => {
    const logger = vi.fn();
    generateReportData(logger);
    expect(logger).toBeCalled();
  });
});
