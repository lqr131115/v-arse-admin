import i18n from "@/i18n";
export const genRouteTitle = (key: string): string => {
  return i18n.global.t(`route.${key}`);
};
