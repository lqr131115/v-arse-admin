import { RouteRecord, RouteRecordRaw } from "vue-router";
import Fuse from "fuse.js";
import i18n from "@/i18n";
import path from "path-browserify";

export interface IFuseDataItem {
  path: string;
  title: string[];
}
export const generateRoutes = (
  routes: (RouteRecord | RouteRecordRaw)[],
  basePath: string = "/",
  prefixTitle: string[] = []
): IFuseDataItem[] => {
  let result: IFuseDataItem[] = [];
  routes.forEach((r) => {
    const routePath = path.resolve(basePath, r.path);
    const item = { path: routePath, title: [...prefixTitle] };

    // 动态路由不允许被检测
    const reg = /.*\/:.*/;
    if (r.meta && r.meta.title && !reg.test(r.path)) {
      const i18Title = i18n.global.t(`route.${r.meta.title}`);
      item.title = [...item.title, i18Title];
      result.push(item);
    }

    if (r.children && r.children.length) {
      const tmpRoutes = generateRoutes(r.children, item.path, item.title);
      if (tmpRoutes.length) {
        result = [...result, ...tmpRoutes];
      }
    }
  });
  return result;
};

export const initFuse = (data: IFuseDataItem[]) => {
  return new Fuse(data, {
    shouldSort: true,
    minMatchCharLength: 1,
    keys: [
      { name: "title", weight: 0.7 },
      { name: "path", weight: 0.3 },
    ],
  });
};
