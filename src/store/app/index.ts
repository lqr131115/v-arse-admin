import { defineStore } from "pinia";
import { Router, RouteLocationNormalized } from "vue-router";
import { getItem, setItem } from "@/utils/storage";
import {
  LOCALE_KEY,
  PROJECT_CONFIG_KEY,
  TAG_VIEW_LIST_KEY,
} from "@/enums/cacheEnum";
import { LOCALE } from "@/settings";
import type { LocaleType, ProjectConfig } from "@/types/app";
const defaultProjectConfig: ProjectConfig = {
  showLogo: true,
  defaultTheme: true,
};
export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    language: getItem(LOCALE_KEY) || LOCALE.ZH_CN,
    projectConfig: getItem(PROJECT_CONFIG_KEY) || defaultProjectConfig,
    tabList: getItem(TAG_VIEW_LIST_KEY) || [],
  }),
  getters: {
    getLanguage: (state) => {
      return state.language;
    },
    getProjectConfig: (state) => {
      return state.projectConfig;
    },
    getTabList: (state) => {
      return state.tabList;
    },
    showMultipleTabs: (state) => {
      return state.tabList && state.tabList.length;
    },
  },
  actions: {
    setLanguage(language: LocaleType) {
      this.language = language;
      setItem(LOCALE_KEY, language);
    },
    setProjectConfig(config: ProjectConfig) {
      const oldConfig = this.getProjectConfig;
      const newConfig = { ...oldConfig, ...config };
      this.projectConfig = newConfig;
      setItem(PROJECT_CONFIG_KEY, newConfig);
    },
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
          return
        }
        this.setTabList(oldList.splice(index));
      }
    },
    closeRightTabs(item: RouteLocationNormalized) {
      const oldList = this.getTabList;
      const index = oldList.findIndex((t: any) => t.path === item.path);
      if (~index) {
        if (index === oldList.length - 1) {
          return
        }
        this.setTabList(oldList.splice(0, index + 1));
      }
    },
    closeOtherTabs(item: RouteLocationNormalized) {
      const oldList = this.getTabList;
      const newList = oldList.filter((t: any) => t.path === item.path);
      this.setTabList(newList);
    },
    closeCurrentTab(item: RouteLocationNormalized) {
      const oldList = this.getTabList;
      const newList = oldList.filter((t: any) => t.path !== item.path);
      this.setTabList(newList);
    },
  },
});
