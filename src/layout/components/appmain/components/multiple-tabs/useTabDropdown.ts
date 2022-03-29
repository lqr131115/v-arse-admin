import { computed, reactive } from "vue";
import { useRouter, RouteLocationNormalized } from "vue-router";
import i18n from "@/i18n";
import { useAppStore } from "@/store/app";
import { MenuEventEnum, DropMenu } from "../type";
import { useTabs } from "@/hooks";
import { isNull } from "@/utils/validate";
export function useTabDropdown(tabItem?: RouteLocationNormalized) {
  const state = reactive({
    current: {},
    currentIndex: 0,
  });
  const appStore = useAppStore();
  const { currentRoute } = useRouter();
  const { refreshPage, closeAll, closeLeft, closeRight, closeOther, closeCurrent } =
    useTabs();
  const getDropMenuList = computed(() => {
    const curItem = state.current;
    const index = state.currentIndex;
    const refreshDisabled = !isNull(curItem)
      ? (curItem as any).path !== currentRoute.value.path
      : true;
    const closeLeftDisabled = index === 0;
    const closeRightDisabled = index === appStore.getTabList.length - 1;
    const disabled = appStore.getTabList.length === 1;

    const dropMenuList: DropMenu[] = [
      {
        icon: "reload",
        event: MenuEventEnum.REFRESH_PAGE,
        text: i18n.global.t("tabsView.reload"),
        disabled: refreshDisabled,
        divider: true,
      },
      {
        icon: "close-left",
        event: MenuEventEnum.CLOSE_LEFT,
        text: i18n.global.t("tabsView.closeLeft"),
        disabled: closeLeftDisabled,
      },
      {
        icon: "close-right",
        event: MenuEventEnum.CLOSE_RIGHT,
        text: i18n.global.t("tabsView.closeRight"),
        disabled: closeRightDisabled,
        divider: true,
      },
      {
        icon: "close-other",
        event: MenuEventEnum.CLOSE_OTHER,
        text: i18n.global.t("tabsView.closeOther"),
        disabled: disabled,
      },
      {
        icon: "close-all",
        event: MenuEventEnum.CLOSE_ALL,
        text: i18n.global.t("tabsView.closeAll"),
        disabled: disabled,
      },
    ];
    return dropMenuList;
  });

  function handleMenuEvent(event: string | number): void {
    switch (event) {
      case MenuEventEnum.REFRESH_PAGE:
        refreshPage();
        break;
      case MenuEventEnum.CLOSE_CURRENT:
        closeCurrent();
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
    }
  }
  function handleContextMenu(tabItem: RouteLocationNormalized) {
    if (!tabItem) {
      return;
    }
    const index = appStore.getTabList.findIndex(
      (tab: any) => tab.path === tabItem.path
    );
    state.current = tabItem as RouteLocationNormalized;
    state.currentIndex = index;
  }

  return { getDropMenuList, handleMenuEvent, handleContextMenu };
}
