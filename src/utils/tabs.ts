import { PageEnum } from "@/enums/pageEnum";
const LOGIN_PATH = PageEnum.BASE_LOGIN;
const whitePathList: string[] = [LOGIN_PATH];
export const inWhiteList = (path: string): boolean => {
  return whitePathList.includes(path);
};
