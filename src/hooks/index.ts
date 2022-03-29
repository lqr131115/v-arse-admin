import { computed } from "vue";
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
  const getTagViewList = computed(() => appStore.getTagViewList);
  return {
    getShowLogo,
    getDefaultTheme,
    getLanguage,
    getTagViewList,
  };
};

enum TableActionEnum {
  REFRESH,
  CLOSE_ALL,
  CLOSE_LEFT,
  CLOSE_RIGHT,
  CLOSE_OTHER,
  CLOSE_CURRENT,
  CLOSE,
}

export const useTabs = () => {
  const appStore = useAppStore();
  async function handleTabAction(action: TableActionEnum, tab?: any) {
    switch (action) {
      case TableActionEnum.REFRESH:
        // await appStore.refreshPage(router);
        console.log("action", TableActionEnum.REFRESH);
        break;

      case TableActionEnum.CLOSE_ALL:
        // await appStore.closeAllTab(router);
        console.log("action", TableActionEnum.CLOSE_ALL);

        break;

      case TableActionEnum.CLOSE_LEFT:
        // await appStore.closeLeftTabs(currentTab, router);
        console.log("action", TableActionEnum.CLOSE_LEFT);

        break;

      case TableActionEnum.CLOSE_RIGHT:
        // await appStore.closeRightTabs(currentTab, router);
        console.log("action", TableActionEnum.CLOSE_RIGHT);
        break;
      case TableActionEnum.CLOSE_OTHER:
        // await appStore.closeOtherTabs(currentTab, router);
        console.log("action", TableActionEnum.CLOSE_OTHER);
        break;
      case TableActionEnum.CLOSE_CURRENT:
      case TableActionEnum.CLOSE:
        // await appStore.closeTab(tab || currentTab, router);
        console.log("close");
        break;
    }
  }
  return {
    refreshPage: () => handleTabAction(TableActionEnum.REFRESH),
    closeAll: () => handleTabAction(TableActionEnum.CLOSE_ALL),
    closeLeft: () => handleTabAction(TableActionEnum.CLOSE_LEFT),
    closeRight: () => handleTabAction(TableActionEnum.CLOSE_RIGHT),
    closeOther: () => handleTabAction(TableActionEnum.CLOSE_OTHER),
    closeCurrent: () => handleTabAction(TableActionEnum.CLOSE_CURRENT),
    close: (tab?: any) => handleTabAction(TableActionEnum.CLOSE, tab),
  };
};
