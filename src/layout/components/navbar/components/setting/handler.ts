import { HandlerEnum } from "./enum";
import { SIDE_BAR_THEME_COLOR_LIST } from "@/settings";
import { genNewStyle, writeNewStyle } from "@/utils/theme";
import { useAppStore } from "@/store/modules/app";
import { useTabStore } from "@/store/modules/tab";
import {
  useThemeStore,
  defaultAppTheme,
  defaultMenuTheme,
  defaultNavbarTheme,
} from "@/store/modules/theme";
import type { MenuTheme } from "@/types/app";
export const baseHandler = (event: HandlerEnum, value?: any) => {
  const appStore = useAppStore();
  const themeStore = useThemeStore();
  switch (event) {
    case HandlerEnum.CHANGE_THEME_COLOR:
      genNewStyle(value).then((res) => {
        writeNewStyle(res);
      });
      themeStore.setAppTheme({ primary: value });
      break;
    case HandlerEnum.HEADER_THEME:
      themeStore.setNavbarTheme({ navBarBgColor: value });
      break;
    case HandlerEnum.MENU_THEME:
      const menuTheme: MenuTheme = {};
      menuTheme.menuBgColor = value;
      themeStore.setMenuTheme({
        ...menuTheme,
        ...SIDE_BAR_THEME_COLOR_LIST[value],
      });
      break;
    case HandlerEnum.OPEN_SEARCH_BAR:
      appStore.setProjectConfig({ openSearchBar: !!value });
      break;
    case HandlerEnum.OPEN_GUIDE_BAR:
      appStore.setProjectConfig({ openGuideBar: !!value });
      break;
    case HandlerEnum.OPEN_LOCALE_BAR:
      appStore.setProjectConfig({ openLocaleBar: !!value });
      break;
    case HandlerEnum.OPEN_SCREEN_BAR:
      appStore.setProjectConfig({ openScreenBar: !!value });
      break;
    case HandlerEnum.SHOW_LOGO:
      appStore.setProjectConfig({ showLogo: !!value });
      break;
    case HandlerEnum.SHOW_BREADCRUMB:
      appStore.setProjectConfig({ showBreadcrumb: !!value });
      break;
    case HandlerEnum.TABS_SHOW_QUICK:
      if (!value) {
        const tabStore = useTabStore();
        tabStore.setTabList([]);
      }
      appStore.setProjectConfig({ showQuick: !!value });
      break;
    case HandlerEnum.DEFAULT_THEME:
      themeStore.setAppTheme(defaultAppTheme);
      genNewStyle(defaultAppTheme.primary!).then((res) => {
        writeNewStyle(res);
      });
      themeStore.setMenuTheme(defaultMenuTheme);
      themeStore.setNavbarTheme(defaultNavbarTheme);
      break;
    case HandlerEnum.ROUTER_TRANSITION:
      if (!value) {
        return;
      }
      appStore.setProjectConfig({ animation: value });
      break;
    case HandlerEnum.BREADCRUMB_ANIMATION:
      // 暂时未做处理 设置无效
      appStore.setProjectConfig({ breadcrumbAnimation: !!value });
      break;
    default:
      break;
  }
};
