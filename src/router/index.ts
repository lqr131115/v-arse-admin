import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import layout from "../layout/layout.vue";
// 私有路由
const privateRoutes: RouteRecordRaw[] = [
  {
    path: "/user",
    redirect: "/user/permission",
    component: layout,
    children: [
      {
        path: "/user/manage",
        name: "user-manage",
        component: () => import("../views/user/manage/userManage.vue"),
        meta: { title: "userManage", icon: "user" },
      },
      {
        path: "/user/role",
        name: "user-role",
        component: () => import("../views/user/role/roleManage.vue"),
        meta: { title: "roleManage", icon: "collection" },
      },
      {
        path: "/user/permission",
        name: "permission-list",
        component: () => import("../views/user/permission/permissionList.vue"),
        meta: { title: "permissionList", icon: "key" },
      },
      {
        path: "/user/info/:id",
        name: "user-info",
        component: () => import("../views/user/info/userInfo.vue"),
        props: true,
        meta: { title: "userInfo" },
      },
    ],
    meta: { title: "user", icon: "avatar" },
  },
  {
    path: "/article",
    redirect: "/article/detail",
    component: layout,
    children: [
      {
        path: "/article/detail",
        name: "article-detail",
        component: () => import("../views/article/detail/articleDetail.vue"),
        meta: { title: "articleDetail", icon: "notebook" },
      },
      {
        path: "/article/rank",
        name: "article-rank",
        component: () => import("../views/article/rank/articleRank.vue"),
        meta: { title: "articleRank", icon: "trophy" },
      },
      {
        path: "/article/create",
        name: "article-create",
        component: () => import("../views/article/create/articleCreate.vue"),
        meta: { title: "articleCreate", icon: "edit-pen" },
      },
    ],
    meta: { title: "article", icon: "management" },
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
    path: "/chart",
    redirect:"/chart/map",
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
];

// 公有路由
const publicRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/layout",
  },
  {
    path: "/layout",
    name: "Layout",
    redirect: "/user",
    component: layout,
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/home/home.vue"),
        meta: { title: "home", icon: "home-filled" },
      },
      {
        path: "/workbench",
        name: "workbench",
        component: () => import("../views/workbench/workbench.vue"),
        meta: { title: "workbench", icon: "briefcase" },
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/about/about.vue"),
        meta: { title: "about", icon: "shop" },
      },
      {
        path: "/401",
        name: "401",
        component: () => import("../views/sys/error/401.vue"),
      },
      {
        path: "/:pathMatch(.*)",
        name: "404",
        component: () => import("../views/sys/error/404.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/sys/login/login.vue"),
  },
  {
    path: '/redirect',
    name: 'Redirect',
    component: () => import('@/views/sys/redirect/redirect.vue'),
  },
  // {
  //   path: "/:pathMatch(.*)",
  //   name: "error",
  //   component: () => import("../views/sys/error/404.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes],
});

export default router;
