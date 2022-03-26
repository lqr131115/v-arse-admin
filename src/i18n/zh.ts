export default {
  login: {
    title: "用户登录",
    loginBtn: "登录",
    usernameRule: "用户名为必填项",
    passwordRule: "密码不能少于6位",
    desc: `
    测试权限账号：<br />
    提供三种权限账号：<br />
    1. 超级管理员账号： super-admin <br />
    2. 管理员账号：admin <br />
    3. 测试可配置账号：test <br />
    密码统一为：123456 <br />
    <br />
    导入用户账号：<br />
    可使用导入的用户名登录 <br />
    密码统一为：123456  <br />
    <b>注意：导入用户区分中英文库！！！！</b>
    `,
  },
  route: {
    home: "首页",
    profile: "个人中心",
    chart: "图表",
    user: "用户",
    staffManage: "员工管理",
    roleManage: "角色管理",
    permissionList: "权限列表",
    article: "文章",
    articleRank: "文章排名",
    articleCreate: "创建文章",
    articleDetail: "文章详情",
    articleEditor: "文章编辑",
    component: "组件库",
    cityPicker: "城市选择器",
    excelImport: "Excel导入",
    userInfo: "员工信息",
  },
  toast: {
    switchLangSuccess: "切换语言成功",
  },
  tagsView: {
    refresh: "刷新",
    closeRight: "关闭右侧",
    closeOther: "关闭其他",
  },
  theme: {
    themeColorChange: "主题色更换",
    themeChange: "主题更换",
  },
  universal: {
    confirm: "确定",
    cancel: "取消",
  },
  navBar: {
    themeChange: "主题修改",
    headerSearch: "页面搜索",
    screenfull: "全屏替换",
    lang: "国际化",
    guide: "功能引导",
    home: "首页",
    course: "课程主页",
    logout: "退出登录",
  },
  guide: {
    close: "关闭",
    next: "下一个",
    prev: "上一个",
    guideTitle: "引导",
    guideDesc: "打开引导功能",
    hamburgerTitle: "汉堡按钮",
    hamburgerDesc: "打开和关闭左侧菜单",
    breadcrumbTitle: "面包屑",
    breadcrumbDesc: "指示当前页面位置",
    searchTitle: "搜索",
    searchDesc: "页面链接搜索",
    fullTitle: "全屏",
    fullDesc: "页面显示切换",
    themeTitle: "主题",
    themeDesc: "更换项目主题",
    langTitle: "国际化",
    langDesc: "语言切换",
    tagTitle: "标签",
    tagDesc: "已打开页面标签",
    sidebarTitle: "菜单",
    sidebarDesc: "项目功能菜单",
  },
  profile: {
    muted: "《vue3 改写 vue-element-admin，实现后台前端综合解决方案》项目演示",
    introduce: "介绍",
    projectIntroduction: "项目介绍",
    projectFunction: "项目功能",
    feature: "功能",
    chapter: "章节",
    author: "作者",
    name: "Sunday",
    job: "一个前端开发程序猿",
    Introduction:
      "高级技术专家，曾就职于国内一线互联网公司，统筹过的多个大型项目用户数已过千万级。致力于研究大前端技术，多次受邀参加国内前端技术分享会，如：2018 年 Google 中国技术分享会。",
  },
  userInfo: {
    print: "打印",
    title: "员工信息",
    name: "姓名",
    sex: "性别",
    nation: "民族",
    mobile: "手机号",
    province: "居住地",
    date: "入职时间",
    remark: "备注",
    address: "联系地址",
    experience: "经历",
    major: "专业",
    glory: "荣耀",
    foot: "签字：___________日期:___________",
  },
  uploadExcel: {
    upload: "点击上传",
    drop: "将文件拖到此处",
  },
  excel: {
    importExcel: "excel 导入",
    exportExcel: "excel 导出",
    exportZip: "zip 导出",
    name: "姓名",
    mobile: "联系方式",
    avatar: "头像",
    role: "角色",
    openTime: "开通时间",
    action: "操作",
    show: "查看",
    showRole: "角色",
    defaultRole: "员工",
    remove: "删除",
    removeSuccess: "删除成功",
    title: "导出为 excel",
    placeholder: "excel 文件名称",
    defaultName: "员工管理表",
    close: "取 消",
    confirm: "导 出",
    importSuccess: " 条员工数据导入成功",
    dialogTitle1: "确定要删除用户 ",
    dialogTitle2: " 吗？",
    roleDialogTitle: "配置角色",
  },
  role: {
    buttonTxt: "新增角色",
    index: "序号",
    name: "名称",
    desc: "描述",
    action: "操作",
    assignPermissions: "分配权限",
    removeRole: "删除角色",
    dialogTitle: "新增角色",
    dialogRole: "角色名称",
    dialogDesc: "角色描述",
    updateRoleSuccess: "用户角色更新成功",
  },
  permission: {
    name: "权限名称",
    mark: "权限标识",
    desc: "权限描述",
  },
  article: {
    ranking: "排名",
    title: "标题",
    author: "作者",
    publicDate: "发布时间",
    desc: "内容简介",
    action: "操作",
    dynamicTitle: "动态展示",
    show: "查看",
    remove: "删除",
    edit: "编辑",
    dialogTitle1: "确定要删除文章 ",
    dialogTitle2: " 吗？",
    removeSuccess: "文章删除成功",
    titlePlaceholder: "请输入文章标题",
    markdown: "markdown",
    richText: "富文本",
    commit: "提交",
    createSuccess: "文章创建成功",
    editorSuccess: "文章修改成功",
    sortSuccess: "文章排名修改成功",
  },
  // new
  header: {
    // user dropdown
    dropdownItemDoc: "文档",
    dropdownItemLoginOut: "退出系统",

    // search
    search: "搜索",

    // guide
    guide: "指南",

    // tooltip
    tooltipErrorLog: "错误日志",
    tooltipLock: "锁定屏幕",
    tooltipNotify: "消息通知",

    tooltipEntryFull: "全屏",
    tooltipExitFull: "退出全屏",

    // lock
    lockScreenPassword: "锁屏密码",
    lockScreen: "锁定屏幕",
    lockScreenBtn: "锁定",

    home: "首页",
  },
  setting: {
    // content mode
    contentModeFull: '流式',
    contentModeFixed: '定宽',
    // topMenu align
    topMenuAlignLeft: '居左',
    topMenuAlignRight: '居中',
    topMenuAlignCenter: '居右',
    // menu trigger
    menuTriggerNone: '不显示',
    menuTriggerBottom: '底部',
    menuTriggerTop: '顶部',
    // menu type
    menuTypeSidebar: '左侧菜单模式',
    menuTypeMixSidebar: '左侧菜单混合模式',
    menuTypeMix: '顶部菜单混合模式',
    menuTypeTopMenu: '顶部菜单模式',

    on: '开',
    off: '关',
    minute: '分钟',

    operatingTitle: '操作成功',
    operatingContent: '复制成功,请到 src/settings/projectSetting.ts 中修改配置！',
    resetSuccess: '重置成功！',

    copyBtn: '拷贝',
    clearBtn: '清空缓存并返回登录页',

    drawerTitle: '项目配置',

    darkMode: '主题',
    navMode: '导航栏模式',
    interfaceFunction: '界面功能',
    interfaceDisplay: '界面显示',
    animation: '动画',
    splitMenu: '分割菜单',
    closeMixSidebarOnChange: '切换页面关闭菜单',

    sysTheme: '系统主题',
    headerTheme: '顶栏主题',
    sidebarTheme: '菜单主题',

    menuDrag: '侧边菜单拖拽',
    menuSearch: '菜单搜索',
    menuAccordion: '侧边菜单手风琴模式',
    menuCollapse: '折叠菜单',
    collapseMenuDisplayName: '折叠菜单显示名称',
    topMenuLayout: '顶部菜单布局',
    menuCollapseButton: '菜单折叠按钮',
    contentMode: '内容区域宽度',
    expandedMenuWidth: '菜单展开宽度',

    breadcrumb: '面包屑',
    breadcrumbIcon: '面包屑图标',
    tabs: '标签页',
    tabsQuickBtn: '标签页快捷按钮',
    tabsRedoBtn: '标签页刷新按钮',
    tabsFoldBtn: '标签页折叠按钮',
    sidebar: '左侧菜单',
    header: '顶栏',
    footer: '页脚',
    fullContent: '全屏内容',
    grayMode: '灰色模式',
    colorWeak: '色弱模式',

    progress: '顶部进度条',
    switchLoading: '切换loading',
    switchAnimation: '切换动画',
    animationType: '动画类型',

    autoScreenLock: '自动锁屏',
    notAutoScreenLock: '不自动锁屏',

    fixedHeader: '固定header',
    fixedSideBar: '固定Sidebar',

    mixSidebarTrigger: '混合菜单触发方式',
    triggerHover: '悬停',
    triggerClick: '点击',

    mixSidebarFixed: '固定展开菜单',
  },
};
