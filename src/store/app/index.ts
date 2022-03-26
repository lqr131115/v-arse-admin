import { defineStore } from "pinia";
import { getItem, setItem } from "@/utils/storage";
import { LOCALE_KEY } from "@/enums/cacheEnum";
import { LOCALE } from "@/settings";
import type { LocaleType } from "@/types/app";
export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    language: getItem(LOCALE_KEY) || LOCALE.ZH_CN,
  }),
  getters: {
    currLanguage: (state) => {
      return state.language;
    },
  },
  actions: {
    setLanguage(language: LocaleType) {
      this.language = language;
      setItem(LOCALE_KEY, language);
    },
  },
});
