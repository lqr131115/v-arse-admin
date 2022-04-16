import { TableOption } from "@/types/component";

interface ITableData {
  date: string;
  name: string;
  address: string;
  [key: string]: string;
}

export const data: ITableData[] = [
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
export const options: TableOption[] = [
  {
    label: "日期",
    prop: "date",
    align: "left",
    slot: "date",
    editable: true,
  },
  {
    label: "姓名",
    prop: "name",
    slot: "name",
  },
  {
    label: "地址",
    prop: "address",
  },
  {
    label: "操作",
    prop: "action",
    action: true,
  },
];
