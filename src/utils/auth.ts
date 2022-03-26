import { TOKEN_TIMEOUT_VALUE } from "@/constants";
import { TOKEN_TIME_STAMP } from "@/enums/cacheEnum";
import { setItem, getItem } from "./storage";

export const getTimeStamp = (): number => {
  return Date.now();
};

export const setTimeStamp = (val: number) => {
  setItem(TOKEN_TIME_STAMP, val);
};

export const isTimeout = (): boolean => {
  const currentTimeStamp = getTimeStamp();
  const oldTimeStamp = getItem(TOKEN_TIME_STAMP);
  return currentTimeStamp - oldTimeStamp > TOKEN_TIMEOUT_VALUE;
};
