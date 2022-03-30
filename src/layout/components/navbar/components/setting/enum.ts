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
