import type { MenuItem } from "@/types/component";

export const menusDemo: MenuItem[] = [
  {
    index: "/home",
    name: "home",
    icon: "home-filled",
  },
  {
    index: "/user",
    name: "user",
    icon: "avatar",
    children: [
      {
        index: "/user/staff",
        name: "userManage",
        icon: "user",
      },
      {
        index: "/user/role",
        name: "roleManage",
        icon: "collection",
      },
      {
        index: "/user/permission",
        name: "permissionList",
        icon: "key",
      },
    ],
  },
  {
    index: "/article",
    name: "article",
    icon: "management",
    children: [
      {
        index: "/article/detail",
        name: "articleDetail",
        icon: "notebook",
      },
      {
        index: "/article/rank",
        name: "articleRank",
        icon: "trophy",
      },
      {
        index: "/article/create",
        name: "articleCreate",
        icon: "edit-pen",
      },
    ],
  },
  {
    index: "/chart",
    name: "chart",
    icon: "trend-charts",
  },
  {
    index: "/component",
    name: "component",
    icon: "grid",
    children: [
      {
        index: "/component/picker",
        icon: "aim",
        name: "cPicker",
      },
    ],
  },
  {
    index: "/workbench",
    name: "workbench",
    icon: "user",
  },
];
