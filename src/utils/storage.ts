/**
 * @description storage 二次封装
 * @author lqr
 */


import envConfig from "@/config/env";

export const getItem = (key: string) => {
  const storage = getStorage();
  return storage[key];
};

export const setItem = (key: string, val: any) => {
  let storage = getStorage();
  storage[key] = val;
  setStorage(storage);
};

export const removeItem = (key: string) => {
  let storage = getStorage();
  delete storage[key];
  setStorage(storage);
};

export const clearAll = () => {
  window.localStorage.removeItem(envConfig.namespace);
};

/**
 * 获取存储值核心函数
 */
const getStorage = () => {
  const storage = window.localStorage.getItem(envConfig.namespace) || "{}";
  return JSON.parse(storage);
};

/**
 * 设置存储值核心函数
 * @param {any} val
 */
const setStorage = (val: any) => {
  if (typeof val === "object") {
    val = JSON.stringify(val);
  }
  window.localStorage.setItem(envConfig.namespace, val);
};
