import layout from "@/layout/layout.vue";
import * as C from '../constants'

export default {
  path: "/user",
  redirect: "/user/permission",
  component: layout,
  children: [
    {
      path: "/user/manage",
      name: C.USER_MANAGE_NAME,
      component: () => import("@/views/user/manage/userManage.vue"),
      meta: { title: "userManage", icon: "user" },
    },
    {
      path: "/user/role",
      name: C.USER_ROLE_NAME,
      component: () => import("@/views/user/role/roleManage.vue"),
      meta: { title: "roleManage", icon: "collection" },
    },
    {
      path: "/user/permission",
      name: C.PERMISSION_LIST_NAME,
      component: () => import("@/views/user/permission/permissionList.vue"),
      meta: { title: "permissionList", icon: "key" },
    },
    {
      path: "/user/info/:id",
      name: C.USER_INFO_NAME,
      component: () => import("@/views/user/info/userInfo.vue"),
      props: true,
      meta: { title: "userInfo" },
    },
  ],
  meta: { title: "user", icon: "avatar" },
};
