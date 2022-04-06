/**
 * @description validate 校验函数
 * @author lqr
 */

import { FILE_MAX_SIZE } from "@/constants";

export function iSExternal(path: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(path);
}

type TNull = "TNull";
export function isNull(val: any): val is TNull {
  return !val || JSON.stringify(val) === "{}" || JSON.stringify(val) === "[]";
}

export function isNumber(val: any): val is number {
  return typeof val === "number";
}

export function isString(val: any): val is string {
  return typeof val === "string";
}

export function isRegW(val: string): boolean {
  return /\w/g.test(val);
}

// 校验是否是Excel文件
export function isExcel(file: File): boolean {
  const fileName = file.name;
  const fileType = fileName.substring(
    fileName.lastIndexOf(".") + 1,
    fileName.length
  );
  return fileType === "xlsx" || fileType === "xls";
}

// 校验文件大小,默认10MB
export function validateFileSize(file: File, maxSize: number = FILE_MAX_SIZE): boolean {
  return file.size / 1024 / 1024 < maxSize;
}