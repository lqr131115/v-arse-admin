import { watch } from "vue";
import { useAppStore } from "@/store/app";
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
