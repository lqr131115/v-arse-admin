import { computed } from "vue";
import { useAppStore } from "@/store/app";

export const useAppConfig = () => {
  const appStore = useAppStore();
  const getLanguage = computed(() => appStore.getLanguage);
  const getLockScreenPwd = computed(() => appStore.lockScreen.password);
  const getScreenIsLock = computed(() => appStore.lockScreen.isLock);
  const getShowLogo = computed(() => appStore.getProjectConfig.showLogo);
  const getAnimationType = computed(() => appStore.getProjectConfig.animation);
  const getShowQuickTabs = computed(() => appStore.getProjectConfig.showQuick);
  const getShowBreadcrumb = computed(() => appStore.getProjectConfig.showBreadcrumb);
  const getOpenBreadcrumbAn = computed(() => appStore.getProjectConfig.breadCrumbAnimation);
  const getOpenSearchBar = computed(() => appStore.getProjectConfig.openSearchBar);
  const getOpenGuideBar = computed(() => appStore.getProjectConfig.openGuideBar);
  const getOpenLocaleBar = computed(() => appStore.getProjectConfig.openLocaleBar);
  const getOpenScreenBar = computed(() => appStore.getProjectConfig.openScreenBar);
  
  return {
    getLanguage,
    getLockScreenPwd,
    getScreenIsLock,
    getShowLogo,
    getAnimationType,
    getShowQuickTabs,
    getShowBreadcrumb,
    getOpenBreadcrumbAn,
    getOpenSearchBar,
    getOpenGuideBar,
    getOpenLocaleBar,
    getOpenScreenBar,
  };
};

