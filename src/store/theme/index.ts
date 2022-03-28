import { defineStore } from "pinia";
import {
  HEADER_PRESET_BG_KEY,
  SIDE_BAR_BG_KEY,
  APP_PRESET_UI_KEY,
} from "@/enums/cacheEnum";
import type { appTheme, menuTheme, navBarTheme } from "@/types/app";
import { getItem, setItem } from "@/utils/storage";

export const defaultAppTheme: appTheme = { primary: '#409eff' };
export const defaultMenuTheme: menuTheme = {
  menuBgColor: "#ffffff",
  textActiveColor: "#ffd04b",
  textColor: "#000000",
};
export const defaultNavbarTheme: navBarTheme = { navBarBgColor: "#ffffff" };
export const useThemeStore = defineStore({
  id: "theme",
  state: () => ({
    appTheme: getItem(APP_PRESET_UI_KEY) || defaultAppTheme,
    menuTheme: getItem(SIDE_BAR_BG_KEY) || defaultMenuTheme,
    navbarTheme: getItem(HEADER_PRESET_BG_KEY) || defaultNavbarTheme,
  }),
  getters: {
    getAppTheme: (state): appTheme => {
      return state.appTheme;
    },
    getMenuTheme: (state): menuTheme => {
      return state.menuTheme;
    },
    getNavbarTheme: (state): navBarTheme => {
      return state.navbarTheme;
    },
  },
  actions: {
    setAppTheme(theme: appTheme) {
      const oldAppTheme = this.getAppTheme;
      const newAppTheme = { ...oldAppTheme, ...theme };
      this.appTheme = newAppTheme;
      setItem(APP_PRESET_UI_KEY, newAppTheme);
    },
    setMenuTheme(theme: menuTheme) {
      const oldMenuTheme = this.getMenuTheme;
      const newMenuTheme = { ...oldMenuTheme, ...theme };
      this.menuTheme = newMenuTheme;
      setItem(SIDE_BAR_BG_KEY, newMenuTheme);
    },
    setNavbarTheme(theme: navBarTheme) {
      const oldMenuTheme = this.getNavbarTheme;
      const newNavbarTheme = { ...oldMenuTheme, ...theme };
      this.navbarTheme = newNavbarTheme;
      setItem(HEADER_PRESET_BG_KEY, newNavbarTheme);
    },
  },
});
