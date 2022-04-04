/**
 * @description validate 校验函数
 * @author lqr
 */

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
  return /\w/g.test(val)
}
