/**
 * @description validate 校验函数
 * @author lqr
 */

export function iSExternal(path: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(path);
}

type TNull = 'TNull'
export function isNull(val: any): val is TNull {
  return !val || JSON.stringify(val) === "{}" || JSON.stringify(val) === "[]";
}

export function isNumber(val: any): val is Number {
  return typeof val === "number";
}
