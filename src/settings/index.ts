import type { LocaleType, DropDown } from "@/types/app";

// locale
export const LOCALE: { [key: string]: LocaleType } = {
  ZH_CN: "zh-cn",
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

// user-dropdown
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

// setting
export const APP_PRESET_COLOR_LIST: string[] = [
  "#0960bd",
  "#0084f4",
  "#009688",
  "#536dfe",
  "#ff5c93",
  "#ee4f12",
  "#0096c7",
  "#9c27b0",
  "#ff9800",
];

export const HEADER_PRESET_BG_COLOR_LIST: string[] = [
  "#ffffff",
  "#151515",
  "#009688",
  "#5172DC",
  "#018ffb",
  "#409eff",
  "#e74c3c",
  "#24292e",
  "#394664",
  "#001529",
  "#383f45",
];

export const SIDE_BAR_BG_COLOR_LIST: string[] = [
  "#001529",
  "#212121",
  "#273352",
  "#ffffff",
  "#191b24",
  "#191a23",
  "#304156",
  "#001628",
  "#28333E",
  "#344058",
  "#383f45",
];

export const SIDE_BAR_THEME_COLOR_LIST: { [key: string]: {} } = {
  "#001529": { textColor: "#ffffff", textActiveColor: "#ffd04b" },
  "#212121": { textColor: "#ffffff", textActiveColor: "#ffd04b" },
  "#273352": { textColor: "#ffffff", textActiveColor: "#ffd04b" },
  "#ffffff": { textColor: "#000000", textActiveColor: "#ffd04b" },
  "#191b24": { textColor: "#ffffff", textActiveColor: "#ffd04b" },
  "#191a23": { textColor: "#ffffff", textActiveColor: "#ffd04b" },
  "#304156": { textColor: "#ffffff", textActiveColor: "#ffd04b" },
  "#001628": { textColor: "#ffffff", textActiveColor: "#ffd04b" },
  "#28333E": { textColor: "#ffffff", textActiveColor: "#ffd04b" },
  "#344058": { textColor: "#ffffff", textActiveColor: "#ffd04b" },
  "#383f45": { textColor: "#ffffff", textActiveColor: "#ffd04b" },
};
