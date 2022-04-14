import { Role, User, Permission, Article } from "./model";

export const userList: User[] = [
  {
    role: [
      {
        id: "1",
        name: "superAdmin",
        desc: "我是唯一超管,可以操作系统所有功能",
        level: "T0",
      },
      {
        id: "2",
        name: "director",
        desc: "我是董事,我可以管理经理",
        level: "T2",
      },
    ],
    _id: "612710a0ec87aa543c9c341d",
    id: "0",
    openTime: "1648821814939",
    username: "super-admin",
    mobile: "188xxxx0001",
    avatar:
      "https://img1.baidu.com/it/u=4259449877,58809073&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
    gender: 1,
    education: "本科",
    major: "软件工程",
    nation: "汉族",
    residence: "繁华大道",
    address: "北京市朝阳区",
    entryTime: "1648821814939",
    remark: "I Miss U",
    permission: {
      menus: [],
      points: [],
    },
  },
  {
    role: [
      {
        id: "1",
        name: "admin",
        desc: "我是管理员,协助超管管理系统",
        level: "T1",
      },
    ],
    _id: "612710a0ec87aa543c9c341e",
    id: "1",
    username: "admin",
    openTime: "1648821000000",
    mobile: "188xxxx0002",
    avatar:
      "https://img1.baidu.com/it/u=3890180243,28045940&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    gender: 0,
    education: "本科",
    major: "计算机",
    nation: "回族",
    residence: "樱花大道",
    address: "湖北省武汉市",
    entryTime: "1648821000000",
    remark: "",
    permission: {
      menus: [],
      points: [],
    },
  },
  {
    role: [
      {
        id: "1",
        name: "director",
        desc: "我是董事,我可以管理经理",
        level: "T2",
      },
    ],
    _id: "612710a0ec87aa522c9c341e",
    id: "3",
    username: "ZhangSan",
    openTime: "1648821220022",
    mobile: "188xxxx0002",
    avatar:
      "https://img1.baidu.com/it/u=3249070913,912844529&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    gender: 1,
    education: "大专",
    major: "会计",
    nation: "汉族",
    residence: "陆家嘴",
    address: "上海市浦西区",
    entryTime: "1648821220022",
    remark: "",
    permission: {
      menus: [],
      points: [],
    },
  },
  {
    role: [
      {
        id: "1",
        name: "admin",
        desc: "我是管理员,协助超管管理系统",
        level: "T1",
      },
      {
        id: "2",
        name: "manager",
        desc: "我是经理,我可以管理员工",
        level: "T3",
      },
    ],
    _id: "612710a0ec87bb543c9c341e",
    id: "4",
    username: "ZaoSi",
    openTime: "1648821110011",
    mobile: "188xxxx0004",
    avatar:
      "https://img2.baidu.com/it/u=1146259256,2780793184&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    gender: 0,
    education: "博士",
    major: "物理",
    nation: "汉族",
    residence: "夫子庙",
    address: "南京市玄武区",
    entryTime: "1648821110011",
    remark: "",
    permission: {
      menus: [],
      points: [],
    },
  },
  {
    role: [
      {
        id: "1",
        name: "staff",
        desc: "我是员工,打工人的人上人",
        level: "T4",
      },
    ],
    _id: "612710a0ec87ca543c9c341e",
    id: "5",
    username: "WangWu",
    openTime: "1648821330033",
    mobile: "155xxxx0005",
    avatar:
      "https://img1.baidu.com/it/u=3624909041,2918634060&fm=253&fmt=auto&app=138&f=JPEG?w=520&h=500",
    gender: 1,
    education: "研究生",
    major: "人工智能",
    nation: "壮族",
    residence: "浙江大学",
    address: "浙江省杭州市",
    entryTime: "1648821330033",
    remark: "",
    permission: {
      menus: [],
      points: [],
    },
  },
];

export const roleList: Role[] = [
  {
    id: "1",
    name: "superAdmin",
    desc: "我是唯一超管,可以操作系统所有功能",
    level: "T0",
  },
  {
    id: "2",
    name: "admin",
    desc: "我是管理员,协助超管管理系统",
    level: "T1",
  },
  {
    id: "3",
    name: "director",
    desc: "我是董事,我可以管理经理",
    level: "T2",
  },
  {
    id: "4",
    name: "manager",
    desc: "我是经理,我可以管理员工",
    level: "T3",
  },
  {
    id: "5",
    name: "staff",
    desc: "我是员工,打工人的人上人",
    level: "T4",
  },
];

export const permissionList: Permission[] = [
  {
    id: "1",
    name: "用户管理",
    mark: "userManage",
    desc: "用户管理菜单",
    children: [
      {
        id: "1-1",
        name: "分配角色",
        mark: "distributeRole",
        desc: "为用户分配角色",
      },
      {
        id: "1-2",
        name: "导入用户",
        mark: "importUser",
        desc: "通过Excel导入用户",
      },
      {
        id: "1-3",
        name: "删除用户",
        mark: "deleteUser",
        desc: "通过Id删除用户",
      },
    ],
  },
  {
    id: "2",
    name: "文章管理",
    mark: "articleManage",
    desc: "用户管理菜单",
    children: [
      {
        id: "2-1",
        name: "打印文章",
        mark: "printArticle",
        desc: "打印文章",
      },
      {
        id: "2-2",
        name: "删除文章",
        mark: "deleteArticle",
        desc: "删除文章",
      },
    ],
  },
];

export const articleList: Article[] = [
  {
    _id: "612a198d218e733440da07e6",
    ranking: 1,
    title: "ESLint + Git Hooks",
    author: "Cool",
    publicDate: "1629099597000",
    desc: "编码规范",
  },
  {
    _id: "612a198d218e733440da07ec",
    ranking: 2,
    title: "Tags View",
    author: "Cool",
    publicDate: "1629099597000",
    desc: "便签快捷导航功能",
  },
  {
    _id: "612a198d218e733440da07e4",
    ranking: 3,
    title: "Element-Plus",
    author: "Cool",
    publicDate: "1629099597000",
    desc: "基于 Vue 3.0 的桌面端组件库",
  },
  {
    _id: "612a198d218e733440da07ea",
    ranking: 4,
    title: "侧边栏",
    author: "Cool",
    publicDate: "1629099597000",
    desc: "根据路由动态生成的 Menu 菜单",
  },
  {
    _id: "612a198d218e733440da07eb",
    ranking: 5,
    title: "动态面包屑",
    author: "Cool",
    publicDate: "1629099597000",
    desc: "动态生成的面包屑数据",
  },
  {
    _id: "612a198d218e733440da07e8",
    ranking: 6,
    title: "权限验证",
    author: "Cool",
    publicDate: "1629099597000",
    desc: "页面权限、功能权限、动态权限、权限配置",
  },
  {
    _id: "612a198d218e733440da07e5",
    ranking: 7,
    title: "vue-element-admin",
    author: "Cool",
    publicDate: "1629099597000",
    desc: "后台前端解决方案",
  },
];
