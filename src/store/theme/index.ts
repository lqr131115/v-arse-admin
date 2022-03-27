import { defineStore } from "pinia";
import { HEADER_PRESET_BG_KEY, SIDE_BAR_BG_KEY } from "@/enums/cacheEnum";
import type { menuTheme, navBarTheme } from "@/types/app";
import { getItem, setItem } from "@/utils/storage";

const defaultMenuTheme: menuTheme = {
  menuBgColor: "#ffffff",
  textActiveColor: "#ffd04b",
  textColor: "#000000",
};
const defaultNavbarTheme: navBarTheme = { navBarBgColor: "#ffffff" };
export const useThemeStore = defineStore({
  id: "theme",
  state: () => ({
    menuTheme: getItem(SIDE_BAR_BG_KEY) || defaultMenuTheme,
    navbarTheme: getItem(HEADER_PRESET_BG_KEY) || defaultNavbarTheme,
  }),
  getters: {
    getMenuTheme: (state): menuTheme => {
      return state.menuTheme;
    },
    getNavbarTheme: (state): navBarTheme => {
      return state.navbarTheme;
    },
  },
  actions: {
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
