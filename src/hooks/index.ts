import { computed } from "vue";
import { Router, useRouter } from "vue-router";
import { useThemeStore } from "@/store/theme";
import { useAppStore } from "@/store/app";
import { useTabStore } from "@/store/tab";
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

export const useAppConfig = () => {
  const appStore = useAppStore();
  const getLanguage = computed(() => appStore.getLanguage);
  const getShowLogo = computed(() => appStore.getProjectConfig.showLogo);
  const getDefaultTheme = computed(() => appStore.getProjectConfig.defaultTheme);
  const getAnimationType = computed(() => appStore.getProjectConfig.animation);
  const getShowQuickTabs = computed(() => appStore.getProjectConfig.showQuick);
  const getShowBreadcrumb = computed(() => appStore.getProjectConfig.showBreadcrumb);
  const getOpenBreadcrumbAn = computed(() => appStore.getProjectConfig.breadCrumbAnimation);
  
  return {
    getLanguage,
    getShowLogo,
    getDefaultTheme,
    getAnimationType,
    getShowQuickTabs,
    getShowBreadcrumb,
    getOpenBreadcrumbAn
  };
};

enum MenuEventEnum {
  REFRESH,
  CLOSE_ALL,
  CLOSE_LEFT,
  CLOSE_RIGHT,
  CLOSE_OTHER,
  CLOSE,
}

export const useTabs = (tabItem?: any) => {
  const tabStore = useTabStore();
  const router = useRouter();
  const getTabList = computed(() => tabStore.getTabList);
  const showMultipleTabs = computed(() => tabStore.showMultipleTabs);
  function handleTabAction(action: MenuEventEnum, tab: any = tabItem, _router:Router = router) {
    switch (action) {
      case MenuEventEnum.REFRESH:
        tabStore.refreshPage(_router);
        break;
      case MenuEventEnum.CLOSE_ALL:
        tabStore.closeAllTab();
        break;
      case MenuEventEnum.CLOSE_LEFT:
        tabStore.closeLeftTabs(tab);
        break;
      case MenuEventEnum.CLOSE_RIGHT:
        tabStore.closeRightTabs(tab);
        break;
      case MenuEventEnum.CLOSE_OTHER:
        tabStore.closeOtherTabs(tab);
        break;
      case MenuEventEnum.CLOSE:
        tabStore.closeTab(tab,_router);
        break;
    } 
  }
  return {
    getTabList,
    showMultipleTabs,
    refreshPage: () => handleTabAction(MenuEventEnum.REFRESH),
    closeAll: () => handleTabAction(MenuEventEnum.CLOSE_ALL),
    closeLeft: () => handleTabAction(MenuEventEnum.CLOSE_LEFT),
    closeRight: () => handleTabAction(MenuEventEnum.CLOSE_RIGHT),
    closeOther: () => handleTabAction(MenuEventEnum.CLOSE_OTHER),
    closeTab: (tab?: any) =>handleTabAction(MenuEventEnum.CLOSE, tab)};
};
