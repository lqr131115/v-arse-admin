interface GroupItem {
  title: string;
  icon: string;
  color: string;
  desc: string;
  date: string;
  group: string;
}

interface NavItem {
  title: string;
  icon: string;
  color: string;
  link: string;
}

interface DynamicInfoItem {
  avatar: string;
  name: string;
  date: string;
  desc: string;
}

export const navItems: NavItem[] = [
  {
    title: "首页",
    icon: "home",
    color: "#1fdaca",
    link: "/home",
  },
  {
    title: "用户",
    icon: "user",
    color: "#3fb27f",
    link: "/user",
  },
  {
    title: "组件",
    icon: "layers",
    color: "#e18525",
    link: "/component",
  },
  {
    title: "权限管理",
    icon: "permission",
    color: "#4daf1b",
    link: "/user/permission",
  },
  {
    title: "图表",
    icon: "chart",
    color: "#00d8ff",
    link: "/chart",
  },
  {
    title: "关于",
    icon: "about",
    color: "#bf0c2c",
    link: "/about",
  },
];

export const dynamicInfoItems: DynamicInfoItem[] = [
  {
    avatar: "https://img1.baidu.com/it/u=2543853135,1235173313&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    name: "威廉",
    date: "刚刚",
    desc: `在 <em>开源组</em> 创建了项目 <em>Vue</em>`,
  },
  {
    avatar: "https://img0.baidu.com/it/u=3949016802,3209806780&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
    name: "艾文",
    date: "1个小时前",
    desc: `关注了 <em>威廉</em> `,
  },
  {
    avatar: "https://img1.baidu.com/it/u=2879595449,1355983822&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
    name: "克里斯",
    date: "1天前",
    desc: `发布了 <em>个人动态</em> `,
  },
  {
    avatar: "https://img2.baidu.com/it/u=2819409779,1450148479&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
    name: "Vben",
    date: "2天前",
    desc: `发表文章 <em>如何编写一个Vite插件</em> `,
  },
  {
    avatar: "https://img2.baidu.com/it/u=2819409779,1450148479&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
    name: "皮特",
    date: "3天前",
    desc: `回复了 <em>杰克</em> 的问题 <em>如何进行项目优化？</em>`,
  },
  {
    avatar: "https://img0.baidu.com/it/u=1116018098,2582839359&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=499",
    name: "杰克",
    date: "1周前",
    desc: `关闭了问题 <em>如何运行项目</em> `,
  },
  {
    avatar: "https://img1.baidu.com/it/u=1722396359,3204173184&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
    name: "威廉",
    date: "1周前",
    desc: `发布了 <em>个人动态</em> `,
  },
  {
    avatar: "https://img0.baidu.com/it/u=1825263236,2597169373&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
    name: "威廉",
    date: "2021-04-01 20:00",
    desc: `推送了代码到 <em>Github</em>`,
  },
];

export const groupItems: GroupItem[] = [
  {
    title: "Github",
    icon: "github",
    color: "",
    desc: "不要等待机会，而要创造机会。",
    group: "开源组",
    date: "2021-04-01",
  },
  {
    title: "Vue",
    icon: "vue",
    color: "#3fb27f",
    desc: "现在的你决定将来的你。",
    group: "算法组",
    date: "2021-04-01",
  },
  {
    title: "Html5",
    icon: "html5",
    color: "#e18525",
    desc: "没有什么才能比努力更重要。",
    group: "上班摸鱼",
    date: "2021-04-01",
  },
  {
    title: "Angular",
    icon: "angular",
    color: "#bf0c2c",
    desc: "热情和欲望可以突破一切难关。",
    group: "UI",
    date: "2021-04-01",
  },
  {
    title: "React",
    icon: "react",
    color: "#00d8ff",
    desc: "健康的身体是实目标的基石。",
    group: "技术牛",
    date: "2021-04-01",
  },
  {
    title: "Js",
    icon: "javascript",
    color: "#4daf1bc9",
    desc: "路是走出来的，而不是空想出来的。",
    group: "架构组",
    date: "2021-04-01",
  },
];
