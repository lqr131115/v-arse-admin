import { defineStore, setActivePinia } from "pinia";
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
    tagViewList: getItem(TAG_VIEW_LIST_KEY) || [],
  }),
  getters: {
    getLanguage: (state) => {
      return state.language;
    },
    getProjectConfig: (state) => {
      return state.projectConfig;
    },
    getTagViewList: (state) => {
      return state.tagViewList;
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
    setTagViewList(list: any[]) {
      this.tagViewList = list;
      setItem(TAG_VIEW_LIST_KEY, list);
    },
    addTagViewItem(item: any) {
      const oldList = this.getTagViewList;
      const isFind = oldList.find((t: any) => t.path === item.path);
      if (!isFind) {
        oldList.push(item);
      }
      this.setTagViewList(oldList);
    },
  },
});
