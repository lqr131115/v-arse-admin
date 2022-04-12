import { computed } from "vue";
import { useThemeStore } from "@/store/theme";

export const useTheme = () => {
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