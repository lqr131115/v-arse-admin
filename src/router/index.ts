import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import UserRoutes from "./modules/user";
import ArticleRoutes from "./modules/article";
import * as C from "@/router/constants";
import { useUserStore } from "@/store/modules/user";
import layout from "@/layout/layout.vue";

// 私有路由
export const privateRoutes: RouteRecordRaw[] = [
  ...UserRoutes,
  ...ArticleRoutes,
];

// 公有路由
export const publicRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/layout",
  },
  {
    path: "/layout",
    name: C.LAYOUT_NAME,
    redirect: "/home",
    component: layout,
    children: [
      {
        path: "/home",
        name: C.HOME_NAME,
        component: () => import("@/views/home/home.vue"),
        meta: { title: "home", icon: "home-filled" },
      },
      {
        path: "/workbench",
        name: C.WORKBENCH_NAME,
        component: () => import("@/views/workbench/workbench.vue"),
        meta: { title: "workbench", icon: "briefcase" },
      },
      {
        path: "/about",
        name: C.ABOUT_NAME,
        component: () => import("@/views/about/about.vue"),
        meta: { title: "about", icon: "shop" },
      },
      {
        path: "/403",
        name: C.PAGE_NOT_ACCESS_NAME,
        component: () => import("@/views/sys/error/error.vue"),
      },
      {
        path: "/404",
        name: C.PAGE_NOT_FOUND_NAME,
        component: () => import("@/views/sys/error/error.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/sys/login/login.vue"),
  },
  {
    path: "/redirect",
    name: C.REDIRECT_NAME,
    component: () => import("@/views/sys/redirect/redirect.vue"),
  },
  {
    path: "/component",
    redirect: "/component/parser",
    component: layout,
    children: [
      {
        path: "/component/table",
        name: C.COMPONENT_TABLE_NAME,
        component: () => import("@/views/component/cTable/cTable.vue"),
        meta: { title: "cTable", icon: "present" },
      },
      {
        path: "/component/form",
        name: C.COMPONENT_FORM_NAME,
        component: () => import("@/views/component/cForm/cForm.vue"),
        meta: { title: "cForm", icon: "film" },
      },
      {
        path: "/component/picker",
        name: C.COMPONENT_PICKER_NAME,
        component: () => import("@/views/component/cPicker/cPicker.vue"),
        meta: { title: "cPicker", icon: "aim" },
      },
      {
        path: "/component/parser",
        name: C.COMPONENT_PARSER_NAME,
        component: () => import("@/views/component/cParser/cParser.vue"),
        meta: { title: "cParser", icon: "files" },
      },
    ],
    meta: { title: "component", icon: "grid" },
  },
  {
    path: "/chart",
    redirect: "/chart/map",
    component: layout,
    name: C.CHART_MAP_NAME,
    meta: { title: "chart", icon: "trend-charts" },
    children: [
      {
        path: "/chart/map",
        component: () => import("@/views/chart/map/map.vue"),
        meta: { title: "chartMap", icon: "map-location" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes,
});

export const resetRoute = () => {
  
  const userStore = useUserStore();
  const userProfile: any = userStore.userProfile;
  if (
    userProfile &&
    userProfile.permission &&
    userProfile.permission.menus &&
    userProfile.permission.menus.length
  ) {
    userProfile.permission.menus.forEach((menu: string) => {
      router.removeRoute(menu);
    });
  }
};

export default router;
