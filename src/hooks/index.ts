import { computed, unref } from "vue";
import { Router, useRouter } from "vue-router";
import { useThemeStore } from "@/store/theme";
import { useAppStore } from "@/store/app";
export const useSetting = () => {
  const themeStore = useThemeStore();
  const getAppThemeColor = computed(() => themeStore.getAppTheme.primary);
  const getMenuBgColor = computed(() => themeStore.getMenuTheme.menuBgColor);
  const getMenuTextColor = computed(() => themeStore.getMenuTheme.textColor);
  const getMenuActiveTextColor = computed(
    () => themeStore.getMenuTheme.textActiveColor
  );
  const getNavbarBgColor = computed(
    () => themeStore.getNavbarTheme.navBarBgColor
  );

  return {
    getAppThemeColor,
    getMenuBgColor,
    getMenuTextColor,
    getMenuActiveTextColor,
    getNavbarBgColor,
  };
};

export const useConfig = () => {
  const appStore = useAppStore();
  const getShowLogo = computed(() => appStore.getProjectConfig.showLogo);
  const getDefaultTheme = computed(
    () => appStore.getProjectConfig.defaultTheme
  );
  const getLanguage = computed(() => appStore.getLanguage);
  const getTabList = computed(() => appStore.getTabList);
  const showMultipleTabs = computed(() => appStore.showMultipleTabs);
  return {
    getShowLogo,
    getDefaultTheme,
    getLanguage,
    getTabList,
    showMultipleTabs,
  };
};

enum MenuEventEnum {
  REFRESH,
  CLOSE_ALL,
  CLOSE_LEFT,
  CLOSE_RIGHT,
  CLOSE_OTHER,
  CLOSE_CURRENT,
  CLOSE,
}

export const useTabs = (_router?: Router) => {
  const appStore = useAppStore();
  const router = _router || useRouter();
  const { currentRoute } = router;

  function getCurrentTab() {
    const route = unref(currentRoute);
    return appStore.getTabList.find((item: any) => item.path === route.path)!;
  }

  function handleTabAction(action: MenuEventEnum, tab?: any) {
    const currentTab = getCurrentTab();
    switch (action) {
      case MenuEventEnum.REFRESH:
        appStore.refreshPage(currentTab, router);
        break;
      case MenuEventEnum.CLOSE_ALL:
        appStore.closeAllTab();
        break;
      case MenuEventEnum.CLOSE_LEFT:
        appStore.closeLeftTabs(currentTab, router);
        break;
      case MenuEventEnum.CLOSE_RIGHT:
        appStore.closeRightTabs(currentTab, router);
        break;
      case MenuEventEnum.CLOSE_OTHER:
        appStore.closeOtherTabs(currentTab, router);
        break;
      case MenuEventEnum.CLOSE_CURRENT:
        appStore.closeTab(currentTab, router);
        break;
    }
  }
  return {
    refreshPage: () => handleTabAction(MenuEventEnum.REFRESH),
    closeAll: () => handleTabAction(MenuEventEnum.CLOSE_ALL),
    closeLeft: () => handleTabAction(MenuEventEnum.CLOSE_LEFT),
    closeRight: () => handleTabAction(MenuEventEnum.CLOSE_RIGHT),
    closeOther: () => handleTabAction(MenuEventEnum.CLOSE_OTHER),
    closeCurrent: (tab?: any) =>
      handleTabAction(MenuEventEnum.CLOSE_CURRENT, tab),
  };
};
