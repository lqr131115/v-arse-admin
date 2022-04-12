import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import layout from "@/layout/layout.vue";
import UserRoutes from "./modules/user";
import * as C from "@/router/constants";
import ArticleRoutes from "./modules/article";
// 私有路由
export const privateRoutes: RouteRecordRaw[] = [UserRoutes, ArticleRoutes];

// 公有路由
const publicRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/layout",
  },
  {
    path: "/layout",
    name: C.LAYOUT_NAME,
    redirect: "/user",
    component: layout,
    children: [
      {
        path: "/home",
        name: C.HOME_NAME,
        component: () => import("../views/home/home.vue"),
        meta: { title: "home", icon: "home-filled" },
      },
      {
        path: "/workbench",
        name: C.WORKBENCH_NAME,
        component: () => import("../views/workbench/workbench.vue"),
        meta: { title: "workbench", icon: "briefcase" },
      },
      {
        path: "/about",
        name: C.ABOUT_NAME,
        component: () => import("../views/about/about.vue"),
        meta: { title: "about", icon: "shop" },
      },
      {
        path: "/403",
        name: C.PAGE_NOT_ACCESS_NAME,
        component: () => import("../views/sys/error/error.vue"),
      },
      {
        path: "/:pathMatch(.*)",
        name: C.PAGE_NOT_FOUND_NAME,
        component: () => import("../views/sys/error/error.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/sys/login/login.vue"),
  },
  {
    path: "/component",
    redirect: "/component/parser",
    component: layout,
    children: [
      {
        path: "/component/picker",
        name: "component-picker",
        component: () => import("../views/component/cPicker/cPicker.vue"),
        meta: { title: "cPicker", icon: "aim" },
      },
      {
        path: "/component/table",
        name: "component-table",
        component: () => import("../views/component/cTable/cTable.vue"),
        meta: { title: "cTable", icon: "present" },
      },
      {
        path: "/component/parser",
        name: "component-parser",
        component: () => import("../views/component/cParser/cParser.vue"),
        meta: { title: "cParser", icon: "files" },
      },
    ],
    meta: { title: "component", icon: "grid" },
  },
  {
    path: "/redirect",
    name: "Redirect",
    component: () => import("@/views/sys/redirect/redirect.vue"),
  },
  {
    path: "/chart",
    redirect: "/chart/map",
    component: layout,
    meta: { title: "chart", icon: "trend-charts" },
    children: [
      {
        path: "/chart/map",
        name: "chart-map",
        component: () => import("../views/chart/map/map.vue"),
        meta: { title: "chartMap", icon: "map-location" },
      },
    ],
  },
  // {
  //   path: "/:pathMatch(.*)",
  //   name: "error",
  //   component: () => import("../views/sys/error/404.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes,
});

export default router;
