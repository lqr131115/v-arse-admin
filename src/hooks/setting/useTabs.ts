import { computed } from "vue";
import { useRouter } from "vue-router";
import type { Router } from "vue-router";
import { useTabStore } from "@/store/tab";

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

