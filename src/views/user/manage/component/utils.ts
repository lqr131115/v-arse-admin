import { saveAs } from "file-saver";
import { utils, SSF, write } from "xlsx";

class Workbook {
  constructor(public SheetNames: string[] = [], public Sheets: object = {}) {}
}

function dateNum(v: string, date1904?: any) {
  if (date1904) v += 1462;
  const epoch = Date.parse(v);
  return (
    (epoch - (new Date(Date.UTC(1899, 11, 30)) as any)) / (24 * 60 * 60 * 1000)
  );
}

function sheet_from_array_of_arrays(data: any[]) {
  const ws = {};
  const range = {
    s: {
      c: 10000000,
      r: 10000000,
    },
    e: {
      c: 0,
      r: 0,
    },
  };
  for (let R = 0; R != data.length; ++R) {
    for (let C = 0; C != data[R].length; ++C) {
      if (range.s.r > R) range.s.r = R;
      if (range.s.c > C) range.s.c = C;
      if (range.e.r < R) range.e.r = R;
      if (range.e.c < C) range.e.c = C;
      const cell: any = {
        v: data[R][C],
      };
      if (cell.v == null) continue;
      const cell_ref = utils.encode_cell({
        c: C,
        r: R,
      });

      if (typeof cell.v === "number") cell.t = "n";
      else if (typeof cell.v === "boolean") cell.t = "b";
      else if (cell.v instanceof Date) {
        cell.t = "n";
        cell.z = SSF._table[14];
        cell.v = dateNum(cell.v);
      } else cell.t = "s";

      ws[cell_ref] = cell;
    }
  }
  if (range.s.c < 10000000) ws["!ref"] = utils.encode_range(range);
  return ws;
}

function s2ab(s: any) {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
  return buf;
}

export type ExportInfo = {
  data: any;
  filename: string;
  header?: any[];
  // 多级表头?
  multiHeader?:boolean
  // 合并项
  merges?: [];
  // 自适应宽度?
  autoWidth?: boolean;
};

export const export_json_to_excel = ({
  data,
  header,
  filename = "excel",
  merges = [],
  multiHeader = false,
  autoWidth = true,
}: ExportInfo) => {
  // 1. 文件名
  filename = filename;
  // 2. 把数据解析为数组
  data = [...data];
  // 3. 表头处理
  if (multiHeader) {
    // TODO:处理多级表头,此处暂时不做处理
    data.unshift(header);
  }else{
    data.unshift(header);
  }
  // 4. 设置 Excel 表工作簿（第一张表格）名称
  const ws_name = "SheetJS";
  // 5. 生成工作簿对象
  const wb = new Workbook();
  // 5. 将 data 数组（json格式）转化为 Excel 数据格式
  const ws = sheet_from_array_of_arrays(data);
  // 6. 合并单元格相关（['A1:A2', 'B1:D1', 'E1:E2']）
  if (merges.length > 0) {
    if (!ws["!merges"]) ws["!merges"] = [];
    merges.forEach((item: any) => {
      ws["!merges"].push(utils.decode_range(item));
    });
  }
  // 7. 单元格宽度相关
  if (autoWidth) {
    /*设置 worksheet 每列的最大宽度*/
    const colWidth = data.map((row: any) =>
      row.map((val: any) => {
        /*先判断是否为null/undefined*/
        if (val == null) {
          return {
            wch: 10,
          };
        } else if (val.toString().charCodeAt(0) > 255) {
          /*再判断是否为中文*/
          return {
            wch: val.toString().length * 2,
          };
        } else {
          return {
            wch: val.toString().length,
          };
        }
      })
    );
    /*以第一行为初始值*/
    let result = colWidth[0];
    for (let i = 1; i < colWidth.length; i++) {
      for (let j = 0; j < colWidth[i].length; j++) {
        if (result[j]["wch"] < colWidth[i][j]["wch"]) {
          result[j]["wch"] = colWidth[i][j]["wch"];
        }
      }
    }
    ws["!cols"] = result;
  }

  // 8. 添加工作表（解析后的 excel 数据）到工作簿
  wb.SheetNames.push(ws_name);
  wb.Sheets[ws_name] = ws;
  // 9. 写入数据
  const wbOut = write(wb as any, {
    bookSST: false,
    type: "binary",
    bookType: "xlsx",
  });
  // 10. 下载数据
  saveAs(
    new Blob([s2ab(wbOut)], { type: "application/octet-stream" }),
    `${filename}.xlsx`
  );
};
