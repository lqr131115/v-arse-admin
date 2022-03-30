export type EnvMode = "development" | "production";

export type ApiUrlConfig = {
  mockUrl: string;
  baseUrl: string;
  [key: string]: string;
};

export type EnvBaseConfig = {
  [P in EnvMode]: ApiUrlConfig;
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

export type AppTheme = {
  primary?: string;
};

export type MenuTheme = {
  menuBgColor?: string;
  menuHoverBgColor?: string;
  textColor?: string;
  textActiveColor?: string;
  submenuBgColor?: string;
  submenuHoverBgColor?: string;
};

export type NavBarTheme = {
  navBarBgColor?: string;
};

export type AnimationType = 'zoom-fade' | 'zoom-out' | 'fade-slide' | 'fade' | 'fade-bottom' | 'fade-scale'

export type ProjectConfig = {
  showLogo?: boolean;
  defaultTheme?: boolean;
  animation?: AnimationType;
  showQuick?:boolean,
  showBreadcrumb?:boolean,
  breadcrumbAnimation?:boolean,
};

export type LabelValueOptions = {
  label: string;
  value: any;
  [key: string]: string | number | boolean;
}[];
