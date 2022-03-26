import type { IMenuItem } from "@/types/component";

export const menusDemo: IMenuItem[] = [
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
        name: "staffManage",
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
        index: "/component/cityPicker",
        icon: "location",
        name: "cityPicker",
      },
    ],
  },
  {
    index: "/profile",
    name: "profile",
    icon: "user-filled",
  },
];
