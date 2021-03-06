import type { Router, RouteLocationNormalized } from "vue-router";
import { defineStore } from "pinia";
import { getItem, setItem } from "@/utils/storage";
import { MULTIPLE_TAB_LIST_KEY } from "@/enums/cacheEnum";
import { useRedo } from "@/hooks/web";
import { isNull } from "@/utils/validate";
export const useTabStore = defineStore({
  id: "tab",
  state: () => ({
    tabList: getItem(MULTIPLE_TAB_LIST_KEY) || [],
  }),
  getters: {
    getTabList: (state) => {
      return state.tabList;
    },
    showMultipleTabs: (state) => {
      return state.tabList && state.tabList.length;
    },
  },
  actions: {
    setTabList(list: any[]) {
      this.tabList = list;
      setItem(MULTIPLE_TAB_LIST_KEY, list);
    },
    addTabItem(item: any) {
      // 有params参数的(动态路由)暂时不添加或者添加一份白名单
      if (!isNull(item.params)) {
        return
      }
      const oldList = this.getTabList;
      const isFind = oldList.find((t: any) => t.path === item.path);
      if (!isFind) {  
        oldList.push(item);
      }
      this.setTabList(oldList);
    },
    setTabSort(oldIndex: number, newIndex: number) {
      const oldList = this.getTabList;
      const sortTab = oldList.splice(oldIndex, 1);
      oldList.splice(newIndex, 0, ...sortTab);
      this.setTabList(oldList);
    },
    async refreshPage(router: Router) {
      const redo = useRedo(router);
      await redo();
    },
    closeAllTab() {
      this.setTabList([]);
    },
    closeLeftTabs(item: RouteLocationNormalized) {
      const oldList = this.getTabList;
      const index = oldList.findIndex((t: any) => t.path === item.path);
      if (~index) {
        if (index === 0) {
          return;
        }
        this.setTabList(oldList.splice(index));
      }
    },
    closeRightTabs(item: RouteLocationNormalized) {
      const oldList = this.getTabList;
      const index = oldList.findIndex((t: any) => t.path === item.path);
      if (~index) {
        if (index === oldList.length - 1) {
          return;
        }
        this.setTabList(oldList.splice(0, index + 1));
      }
    },
    closeOtherTabs(item: RouteLocationNormalized) {
      const oldList = this.getTabList;
      const newList = oldList.filter((t: any) => t.path === item.path);
      this.setTabList(newList);
    },
    closeTab(item: RouteLocationNormalized, router: Router) {
      const oldList = this.getTabList;
      const index = oldList.findIndex((t: any) => t.path === item.path);
      const newList = oldList.filter((t: any) => t.path !== item.path);
      this.setTabList(newList);
      if (~index) {
        const { currentRoute } = router;
        if (item.path === currentRoute.value.path) {
          const preTab = oldList[index - 1];
          if (!preTab) {
            const nextTab = oldList[index + 1];
            if (!nextTab) {
              return;
            } else {
              router.push(nextTab.path);
            }
          } else {
            router.push(preTab.path);
          }
        }
      }
    },
  },
});
