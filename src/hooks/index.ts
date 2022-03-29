import { computed } from "vue";
import { useThemeStore } from "@/store/theme";
import { useAppStore } from "@/store/app";
export const useSetting = () => {
  const themeStore = useThemeStore();
  const getAppThemeColor = computed(() => themeStore.getAppTheme.primary);
  const getMenuBgColor = computed(() => themeStore.getMenuTheme.menuBgColor);
  const getMenuTextColor = computed(() => themeStore.getMenuTheme.textColor);
  const getMenuActiveTextColor = computed(() => themeStore.getMenuTheme.textActiveColor);
  const getNavbarBgColor = computed(() => themeStore.getNavbarTheme.navBarBgColor);

  return {
    getAppThemeColor,
    getMenuBgColor,
    getMenuTextColor,
    getMenuActiveTextColor,
    getNavbarBgColor,
  };
};


export const useConfig = () => {
  const appStore = useAppStore()
  const getShowLogo = computed(() => appStore.getProjectConfig.showLogo);
  const getDefaultTheme = computed(() => appStore.getProjectConfig.defaultTheme);
  const getLanguage = computed(() => appStore.getLanguage)
  return {
    getShowLogo,
    getDefaultTheme,
    getLanguage
  }
}