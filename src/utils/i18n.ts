import { watch } from "vue";
import { useAppStore } from "@/store/app";
import i18n from "@/i18n";
export const genRouteTitle = (key: string): string => {
  return i18n.global.t(`route.${key}`);
};

export const watchSwitchLanguage = (...cbs: Function[]) => {
  const appStore = useAppStore();
  watch(
    () => appStore.getLanguage,
    () => {
      cbs.forEach((cb) => {
        cb && cb();
      });
    }
  );
};
