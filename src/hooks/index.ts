import { computed } from "vue";
import { useThemeStore } from "@/store/theme";
export const useThemeSetting = () => {
  const themeStore = useThemeStore();
  const getAppThemeColor = computed(() => themeStore.getAppTheme.primary);
  const getMenuBgColor = computed(() => themeStore.getMenuTheme.menuBgColor);
  const getNavbarBgColor = computed(() => themeStore.getNavbarTheme.navBarBgColor);
  return {
    getAppThemeColor,
    getMenuBgColor,
    getNavbarBgColor,
  };
};
