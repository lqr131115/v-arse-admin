import { defineStore } from "pinia";
import type { menuTheme, navBarTheme } from "@/types/app";

const defaultMenuTheme: menuTheme = {menuBgColor: "#ffffff",textActiveColor: "#ffd04b"};
const defaultNavbarTheme: navBarTheme = { navBarBgColor: "#ffffff" };
export const useThemeStore = defineStore({
  id: "theme",
  state: () => ({
    menuTheme: defaultMenuTheme,
    navbarTheme: defaultNavbarTheme,
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
      this.menuTheme = { ...oldMenuTheme, ...theme };
    },
    setNavbarTheme(theme: navBarTheme) {
      const oldMenuTheme = this.getNavbarTheme;
      this.navbarTheme = { ...oldMenuTheme, ...theme };
    },
  },
});
