import { computed, reactive } from "vue";
import { useRouter, RouteLocationNormalized } from "vue-router";
import i18n from "@/i18n";
import { useTabStore } from "@/store/modules/tab";
import { MenuEventEnum, DropMenu } from "../type";
import { useTabs } from "@/hooks/setting/useTabs";
import { isNull } from "@/utils/validate";
export function useTabDropdown(tabItem?: RouteLocationNormalized) {
  if (!tabItem) {
    return;
  }
  const tabStore = useTabStore();
  const state = reactive({
    currentClickItem: tabItem,
    currentClickIndex: 0,
  });
  state.currentClickIndex = tabStore.getTabList.findIndex((tab: any) => tab.path === tabItem!.path);
  const { currentRoute } = useRouter();
  const {
    refreshPage,
    closeAll,
    closeLeft,
    closeRight,
    closeOther,
    closeTab,
  } = useTabs(tabItem);
  const getDropMenuList = computed(() => {
    const curClickItem = state.currentClickItem;
    const curClickIndex = state.currentClickIndex;
    const refreshDisabled = !isNull(curClickItem)
      ? (curClickItem as any).path !== currentRoute.value.path
      : true;
    const closeLeftDisabled = curClickIndex === 0;
    const closeRightDisabled = curClickIndex === tabStore.getTabList.length - 1;
    const closeOtherOrAllDisabled = tabStore.getTabList.length === 1;

    const dropMenuList: DropMenu[] = [
      {
        icon: "reload",
        event: MenuEventEnum.REFRESH_PAGE,
        text: i18n.global.t("multipleTabs.reload"),
        disabled: refreshDisabled,
        divider: true,
      },
      {
        icon: "close-left",
        event: MenuEventEnum.CLOSE_LEFT,
        text: i18n.global.t("multipleTabs.closeLeft"),
        disabled: closeLeftDisabled,
      },
      {
        icon: "close-right",
        event: MenuEventEnum.CLOSE_RIGHT,
        text: i18n.global.t("multipleTabs.closeRight"),
        disabled: closeRightDisabled,
        divider: true,
      },
      {
        icon: "close-other",
        event: MenuEventEnum.CLOSE_OTHER,
        text: i18n.global.t("multipleTabs.closeOther"),
        disabled: closeOtherOrAllDisabled,
      },
      {
        icon: "close-all",
        event: MenuEventEnum.CLOSE_ALL,
        text: i18n.global.t("multipleTabs.closeAll"),
        disabled: closeOtherOrAllDisabled,
      },
    ];
    return dropMenuList;
  });
  
  function handleMenuEvent(event: string | number): void {
    switch (event) {
      case MenuEventEnum.REFRESH_PAGE:
        refreshPage();
        break;
      case MenuEventEnum.CLOSE_LEFT:
        closeLeft();
        break;
      case MenuEventEnum.CLOSE_RIGHT:
        closeRight();
        break;
      case MenuEventEnum.CLOSE_OTHER:
        closeOther();
        break;
      case MenuEventEnum.CLOSE_ALL:
        closeAll();
        break;
      case MenuEventEnum.CLOSE:
        closeTab()
        break;
    }
  }
  return { getDropMenuList, handleMenuEvent };
}
