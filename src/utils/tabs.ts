import { PageEnum } from "@/enums/pageEnum";
const LOGIN_PATH = PageEnum.BASE_LOGIN;
const ERROR_404__PATH = PageEnum.ERROR_PAGE__404;
const ERROR_401__PATH = PageEnum.ERROR_PAGE__401;
const whitePathList: string[] = [LOGIN_PATH, ERROR_404__PATH, ERROR_401__PATH];
export const inWhiteList = (path: string): boolean => {
  return whitePathList.includes(path);
};
