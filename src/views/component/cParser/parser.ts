import { read as xlsxRead, utils } from "xlsx";
// import { convertToHtml } from "mammoth";
import { isExcel, isWord } from "@/utils/validate";
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

  async function parseWord(data: any) {
    // TODO: 对于word文档的解析, doc --> HTML
    // const result = await convertToHtml({ arrayBuffer: data });
    // return result;
  }

  const fileData = await readFile(file.raw!);
  if (isExcel(file.raw!)) {
    return parseExcel(fileData);
  } else if (isWord(file.raw!)) {
    return parseWord(fileData);
  } else {
  }
};
