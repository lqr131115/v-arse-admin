import { Role, User } from "./model";

export const userList: User[] = [
  {
    role: [
      {
        id: "1",
        title: "超级管理员",
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
  },
  {
    role: [
      {
        id: "2",
        title: "管理员",
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
  },
  {
    role: [
      {
        id: "3",
        title: "员工",
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
  },
  {
    role: [
      {
        id: "4",
        title: "员工",
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
  },
  {
    role: [
      {
        id: "5",
        title: "员工",
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
  },
];

export const roleList: Role[] = [
  {
    id: "superAdminId",
    name: "superAdmin",
    desc: "我是唯一超管,可以操作系统所有功能",
    level: 'T0',
  },
  {
    id: "adminId",
    name: "admin",
    desc: "我是管理员,协助超管管理系统",
    level: 'T1',
  },
  {
    id: "directorId",
    name: "director",
    desc: "我是董事,我可以管理经理",
    level: 'T2',
  },
  {
    id: "managerId",
    name: "manager",
    desc:"我是经理,我可以管理员工",
    level: 'T3',
  },
  {
    id: "staffId",
    name: "staff",
    desc:"我是员工,打工人的人上人",
    level: 'T4',
  },
];
