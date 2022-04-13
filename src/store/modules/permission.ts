import { defineStore } from "pinia";
import { RouteRecordRaw } from "vue-router";
import { privateRoutes, publicRoutes } from "@/router";
export const usePermissionStore = defineStore({
  id: "permission",
  state: () => ({
    routes: publicRoutes,
  }),
  getters: {
    getRoutes: (state) => {
      return state.routes;
    },
  },
  actions: {
    setRoutes(routes: RouteRecordRaw[]) {
      this.routes = [...publicRoutes, ...routes];
    },
    filterRoutes(menus: string[] = []) {
      const result: RouteRecordRaw[] = [];
      menus.forEach((key) => {
        const matchRoute = privateRoutes.filter((r) => r.name === key);
        if (matchRoute && matchRoute.length) {
          result.push(...matchRoute);
        }
      });
      //  手动添加404路由要至最后
      result.push({
        path: "/:pathMatch(.*)",
        redirect: "/404",
      });
      return result;
    },
  },
});
