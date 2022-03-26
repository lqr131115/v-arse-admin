export type EnvMODE = "development" | "production";

export type BaseConfig = {
  mockUrl: string;
  baseUrl: string;
};
export type Config = {
  [P in EnvMODE]: BaseConfig;
};

export type LocaleType = "zh_CN" | "en";

export type DropDown = {
  text: string;
  value: string;
  command?: string | number | object;
  disabled?: boolean;
  divided?: boolean;
  icon?: string;
};

export type menuTheme = {
  menuBgColor?:string,
  menuHoverBgColor?:string,
  textColor?:string,
  textActiveColor?:string,
  submenuBgColor?:string,
  submenuHoverBgColor?:string,
}

export type navBarTheme = {
  navBarBgColor?:string,
}