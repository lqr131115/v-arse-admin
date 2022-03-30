import { RouterTransitionEnum } from "@/enums/appEnum";

export enum HandlerEnum {
  CHANGE_THEME_COLOR = "CHANGE_THEME_COLOR",
  HEADER_THEME = "HEADER_THEME",
  MENU_THEME = "MENU_THEME",
  SHOW_LOGO = "SHOW_LOGO",
  SHOW_BREADCRUMB = 'SHOW_BREADCRUMB',
  BREADCRUMB_ANIMATION = 'BREADCRUMB_ANIMATION',
  TABS_SHOW_QUICK = 'TABS_SHOW_QUICK',
  ROUTER_TRANSITION = "ROUTER_TRANSITION",
  DEFAULT_THEME = "DEFAULT_THEME",
  OPEN_SEARCH_BAR = "OPEN_SEARCH_BAR",
  OPEN_GUIDE_BAR = "OPEN_GUIDE_BAR",
  OPEN_LOCALE_BAR = "OPEN_LOCALE_BAR",
  OPEN_SCREEN_BAR = "OPEN_SCREEN_BAR",
}

export const routerTransitionOptions = [
  RouterTransitionEnum.ZOOM_FADE,
  RouterTransitionEnum.FADE,
  RouterTransitionEnum.ZOOM_OUT,
  RouterTransitionEnum.FADE_SIDE,
  RouterTransitionEnum.FADE_BOTTOM,
  RouterTransitionEnum.FADE_SCALE,
].map((item) => {
  return {
    label: item,
    value: item,
  };
});
