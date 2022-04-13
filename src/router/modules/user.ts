import layout from "@/layout/layout.vue";
import * as C from '../constants'

export default [
  {
    path: "/user",
    redirect: "/user/manage",
    component: layout,
    name: C.USER_MANAGE_NAME,
    children: [
      {
        path: "/user/manage",
        component: () => import("@/views/user/manage/userManage.vue"),
        meta: { title: "userManage", icon: "user" },
      },
    ],
    meta: { title: "user", icon: "avatar" },
  },
  {
    path: "/user",
    redirect: "/user/manage",
    component: layout,
    name: C.USER_ROLE_NAME,
    children: [
      {
        path: "/user/role",
        name: C.USER_ROLE_NAME,
        component: () => import("@/views/user/role/roleManage.vue"),
        meta: { title: "roleManage", icon: "collection" },
      },
    ],
    meta: { title: "user", icon: "avatar" },
  },
  {
    path: "/user",
    redirect: "/user/manage",
    component: layout,
    name: C.PERMISSION_LIST_NAME,
    children: [
      {
        path: "/user/permission",
        name: C.PERMISSION_LIST_NAME,
        component: () => import("@/views/user/permission/permissionList.vue"),
        meta: { title: "permissionList", icon: "key" },
      },
    ],
    meta: { title: "user", icon: "avatar" },
  },
  {
    path: "/user",
    redirect: "/user/manage",
    component: layout,
    name: C.USER_INFO_NAME,
    children: [
      {
        path: "/user/info/:id",
        name: C.USER_INFO_NAME,
        component: () => import("@/views/user/info/userInfo.vue"),
        props: true,
        meta: { title: "userInfo" },
      },
    ],
    meta: { title: "user", icon: "avatar" },
  }
]