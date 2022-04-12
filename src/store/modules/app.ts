import { defineStore } from "pinia";
import { getItem, setItem } from "@/utils/storage";
import {
  LOCALE_KEY,
  PROJECT_CONFIG_KEY,
  LOCK_SCREEN_KEY
} from "@/enums/cacheEnum";
import { LOCALE } from "@/settings";
import type { LocaleType, ProjectConfig,LockScreen } from "@/types/app";
const defaultProjectConfig: ProjectConfig = {
  showLogo: true,
  animation: "fade",
  showQuick: true,
  showBreadcrumb: true,
  breadcrumbAnimation: true,
  openSearchBar: true,
  openGuideBar: true,
  openLocaleBar: true,
  openScreenBar: true,
};
const defaultLockScreen: LockScreen = {password:'123123',isLock:false};
export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    language: getItem(LOCALE_KEY) || LOCALE.ZH_CN,
    lockScreen: getItem(LOCK_SCREEN_KEY) || defaultLockScreen,
    projectConfig: getItem(PROJECT_CONFIG_KEY) || defaultProjectConfig,
  }),
  getters: {
    getLanguage: (state) => {
      return state.language;
    },
    getLockScreen: (state) => {
      return state.lockScreen;
    },
    getProjectConfig: (state) => {
      return state.projectConfig;
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
    setLockScreen(val: LockScreen = {}) {
      val.isLock = !!val.password
      this.lockScreen = val;
      setItem(LOCK_SCREEN_KEY, val);
    },
  
  },
});
