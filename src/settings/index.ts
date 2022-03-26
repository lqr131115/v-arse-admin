import type { LocaleType, DropDown } from "@/types/app";

export const LOCALE: { [key: string]: LocaleType } = {
  ZH_CN: "zh_CN",
  EN_US: "en",
};

export const localeList: DropDown[] = [
  {
    text: "简体中文",
    value: LOCALE.ZH_CN,
    icon: "apple",
  },
  {
    text: "English",
    value: LOCALE.EN_US,
    icon: "grape",
  },
];

export const USER_DD: { [key: string]: string } = {
  DESC: "desc",
  LOCK_SCREEN: "lock-screen",
  LOGOUT: "logout",
};

export const userDropDownList: DropDown[] = [
  {
    text: "dropdownItemDoc",
    value: USER_DD.DESC,
    icon: "document",
  },
  {
    text: "lockScreen",
    value: USER_DD.LOCK_SCREEN,
    icon: "lock",
    divided: true,
  },
  {
    text: "dropdownItemLoginOut",
    value: USER_DD.LOGOUT,
    icon: "circle-close",
  },
];
