import { read as xlsxRead, utils } from "xlsx";
import { isExcel } from "@/utils/validate";
import { getSheetHeader } from "./utils";
import type { UploadFile } from "element-plus";

export const baseParser = async (
  file: UploadFile,
  value?: any
): Promise<unknown> => {
  function readFile(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        resolve(e.target!.result);
      };
      reader.readAsArrayBuffer(file);
    });
  }

  function parseExcel(data: any) {
    const workbook = xlsxRead(data, { type: "array" });
    const sheet1 = workbook.Sheets[workbook.SheetNames[0]];
    const header = getSheetHeader(sheet1);
    const body = utils.sheet_to_json(sheet1);
    return { header, body };
  }
  
  const fileData = await readFile(file.raw!);
  if (isExcel(file.raw!)) {
    return parseExcel(fileData);
  } else {
  }
};
