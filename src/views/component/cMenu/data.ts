import type { MenuItem } from "@/types/component";

export const menusDemo: MenuItem[] = [
  {
    index: "/user",
    name: "user",
    i: "Avatar",
    children: [
      {
        index: "/user/staff",
        name: "userManage",
        i: "User",
        children: [
          {
            index: "/user/role",
            name: "roleManage",
            i: "Collection",
            children: [
              {
                index: "/user/permission",
                name: "permissionList",
                i: "Key",
              },
            ],
          },
        ],
      },
    ],
  },
];
