import { RouteRecord, RouteRecordRaw } from "vue-router";
// Module "path" has been externalized for browser compatibility and cannot be accessed in client code.
import path from "path-browserify";
import { isNull } from "./validate";
import type { MenuItem } from '@/types/component';

/**
 * @param routes 注册路由
 * @returns 子路由
 */
export const getChildrenRoutes = (routes: RouteRecord[]): RouteRecordRaw[] => {
  let result: RouteRecordRaw[] = [];
  routes.forEach((r) => {
    if (r.children && r.children.length) {
      result.push(...r.children);
    }
  });
  return result;
};

/**
 * @param routes 注册路由
 * @returns 一级路由
 */
export const filterRoutes = (routes: RouteRecord[]): RouteRecord[] => {
  const childRoutes = getChildrenRoutes(routes);
  return routes.filter((r) => {
    return !childRoutes.find((c) => r.path === c.path);
  });
};

/**
 * @param routes 注册路由 只有meta中title和icon有值才能在菜单栏中显示
 * @returns 左侧菜单显示的路由
 */
type TRoute = RouteRecord | RouteRecordRaw;
export const generateMenus = (
  routes: TRoute[] = [],
  basePath = ""
): TRoute[] => {
  let result: TRoute[] = [];
  routes.forEach((r) => {
    // 没children、没meta
    if (isNull(r.children) && isNull(r.meta)) {
      return;
    }
    // 有children、没meta
    if (!isNull(r.children) && isNull(r.meta)) {
      result.push(...generateMenus(r.children));
      return;
    }

    // 有meta
    const routePath = path.resolve(basePath, r.path);
    // 可能存在同名父路由的情况
    let route = result.find((item) => item.path === routePath);
    if (!route) {
      route = {
        ...r,
        path: routePath,
        children: [],
      };
      // meta有title、有icon的才符合
      if (route.meta!.title && route.meta!.icon) {
        result.push(route);
      }
    }
    // 有children
    if (!isNull(r.children)) {
      route.children?.push(...generateMenus(r.children, route.path));
    }
  });
  return result;
};

/**
 *
 * @param routes 左侧菜单显示的路由
 * @returns 符合Menu组件data格式的路由
 */
export const formatMenus = (routes: any[]): MenuItem[] => {
  const result: MenuItem[] = [];
  routes.forEach((r) => {
    let item: MenuItem = { name: "", index: "" };
    item.index = r.path;
    item.name = r.meta.title;
    item.icon = r.meta.icon;
    if (!isNull(r.children)) {
      item.children = formatMenus(r.children);
    }
    result.push(item);
  });
  return result;
};
