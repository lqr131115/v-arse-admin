import { defineStore } from "pinia";
import {
  HEADER_PRESET_BG_KEY,
  SIDE_BAR_BG_KEY,
  APP_PRESET_UI_KEY,
} from "@/enums/cacheEnum";
import { getItem, setItem } from "@/utils/storage";
import type { AppTheme, MenuTheme, NavBarTheme } from "@/types/app";

export const defaultAppTheme: AppTheme = { primary: '#409eff' };
export const defaultMenuTheme: MenuTheme = {
  menuBgColor: "#ffffff",
  textActiveColor: "#ffd04b",
  textColor: "#000000",
};
export const defaultNavbarTheme: NavBarTheme = { navBarBgColor: "#ffffff" };
export const useThemeStore = defineStore({
  id: "theme",
  state: () => ({
    appTheme: getItem(APP_PRESET_UI_KEY) || defaultAppTheme,
    menuTheme: getItem(SIDE_BAR_BG_KEY) || defaultMenuTheme,
    navbarTheme: getItem(HEADER_PRESET_BG_KEY) || defaultNavbarTheme,
  }),
  getters: {
    getAppTheme: (state): AppTheme => {
      return state.appTheme;
    },
    getMenuTheme: (state): MenuTheme => {
      return state.menuTheme;
    },
    getNavbarTheme: (state):NavBarTheme  => {
      return state.navbarTheme;
    },
  },
  actions: {
    setAppTheme(theme: AppTheme) {
      const oldAppTheme = this.getAppTheme;
      const newAppTheme = { ...oldAppTheme, ...theme };
      this.appTheme = newAppTheme;
      setItem(APP_PRESET_UI_KEY, newAppTheme);
    },
    setMenuTheme(theme: MenuTheme) {
      const oldMenuTheme = this.getMenuTheme;
      const newMenuTheme = { ...oldMenuTheme, ...theme };
      this.menuTheme = newMenuTheme;
      setItem(SIDE_BAR_BG_KEY, newMenuTheme);
    },
    setNavbarTheme(theme: NavBarTheme) {
      const oldMenuTheme = this.getNavbarTheme;
      const newNavbarTheme = { ...oldMenuTheme, ...theme };
      this.navbarTheme = newNavbarTheme;
      setItem(HEADER_PRESET_BG_KEY, newNavbarTheme);
    },
  },
});
