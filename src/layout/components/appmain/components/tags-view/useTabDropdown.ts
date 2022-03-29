import { computed } from "vue";
import i18n from "@/i18n";
import { MenuEventEnum, DropMenu } from "../type";

export function useTabDropdown() {
  const getDropMenuList = computed(() => {
    const dropMenuList: DropMenu[] = [
      {
        icon: "reload",
        event: MenuEventEnum.REFRESH_PAGE,
        text: i18n.global.t("tabsView.reload"),
        divider: true,
      },
      {
        icon: "close-left",
        event: MenuEventEnum.CLOSE_LEFT,
        text: i18n.global.t("tabsView.closeLeft"),
      },
      {
        icon: "close-right",
        event: MenuEventEnum.CLOSE_RIGHT,
        text: i18n.global.t("tabsView.closeRight"),
        divider: true,
      },
      {
        icon: "close-other",
        event: MenuEventEnum.CLOSE_OTHER,
        text: i18n.global.t("tabsView.closeOther"),
      },
      {
        icon: "close-all",
        event: MenuEventEnum.CLOSE_ALL,
        text: i18n.global.t("tabsView.closeAll"),
      },
    ];

    return dropMenuList;
  });
  return { getDropMenuList };
}
