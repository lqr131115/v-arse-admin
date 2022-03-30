import Driver from "driver.js";
import "driver.js/dist/driver.min.css";
export const genSteps = (t: Function): Driver.Step[] => {
  return [
    {
      element: "#first-search",
      popover: {
        title: t('driver.searchTitle'),
        description: t('driver.searchDesc'),
        position: "bottom-center",
      },
    },
    {
      element: "#second-guide",
      popover: {
        title: t('driver.guideTitle'),
        description: t('driver.guideDesc'),
        position: "bottom-right",
      },
    },
    {
      element: "#third-setting",
      popover: {
        title: t('driver.settingTitle'),
        description: t('driver.settingDesc'),
        position: "bottom-right",
      },
    },
    {
      element: "#forth-collapse",
      popover: {
        title: t('driver.collapseTitle'),
        description: t('driver.collapseDesc'),
        position: "bottom",
      },
    },
    {
      element: "#fifth-menu",
      popover: {
        title: t('driver.menuTitle'),
        description: t('driver.menuDesc'),
        position: "right-center",
      },
    },
  ];
};

export const initDriver = (t: Function): Driver => {
  return new Driver({
    allowClose: false,
    nextBtnText: t("buttons.next"),
    prevBtnText: t("buttons.prev"),
    closeBtnText: t("buttons.close"),
  doneBtnText:t('buttons.done')
  });
};
