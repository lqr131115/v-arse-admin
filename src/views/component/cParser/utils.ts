import { WorkSheet } from "xlsx";
import type { TableOption } from "@/types/component";
export const getSheetHeader = (sheet: WorkSheet) => {
  const header: string[] = [];
  for (const key in sheet) {
    if (Object.prototype.hasOwnProperty.call(sheet, key)) {
      const match = key.match(/[A-Z]{1,2}(?=1)/g);
      if (match) {
        const cell = sheet[key];
        header.push(cell.v);
      }
    }
  }
  return header;
};

export const genExcelTableOptions = (data: any[] = []): TableOption[] => {
  const options: TableOption[] = [];
  data.forEach((item) => {
    // let opt: TableOption = { prop: item.codePointAt(0)!.toString()!, label: item };
    let opt: TableOption = { prop: item, label: item };
    options.push(opt);
  });
  return options;
};
