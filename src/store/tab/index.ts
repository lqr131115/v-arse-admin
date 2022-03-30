import { defineStore } from "pinia";
import { Router, RouteLocationNormalized } from "vue-router";
import { getItem, setItem } from "@/utils/storage";
import { TAG_VIEW_LIST_KEY } from "@/enums/cacheEnum";
export const useTabStore = defineStore({
  id: "tab",
  state: () => ({
    tabList: getItem(TAG_VIEW_LIST_KEY) || [],
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
      setItem(TAG_VIEW_LIST_KEY, list);
    },
    addTabItem(item: any) {
      const oldList = this.getTabList;
      const isFind = oldList.find((t: any) => t.path === item.path);
      if (!isFind) {
        oldList.push(item);
      }
      this.setTabList(oldList);
    },
    refreshPage(router: Router) {
      router.go(0);
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
            const preTab = oldList[index - 1]
            if (!preTab) {
                const nextTab = oldList[index + 1]
                if (!nextTab) {
                    return
                }else{
                    router.push(nextTab.path)
                }
            }else{
                router.push(preTab.path)
            }
        }
      }
   
    },
  },
});
