import { writeData } from "./io";

export const generateReportData = (logFn: (data: string) => {}) => {
  const data: string = "Some data dummy for this demo app";
  if (logFn) {
    logFn(data);
  }
  return data;
};
export const storeData = async (data: string) => {
  if (!data) throw new Error("No data received!");
  await writeData(data, "data.txt");
};
