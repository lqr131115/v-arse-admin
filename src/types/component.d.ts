/**
 * 全局注册的自定义组件
 */
export type MenuItem = {
  index: string;
  name: string;
  icon?: string;
  i?: string; // 无限嵌套时的icon
  children?: MenuItem[];
};

export type IBreadcrumbItem = {
  title: string;
  path: string;
};

export type TableOption = {
  label: string;
  prop: string;
  align?: "left" | "center" | "right";
  width?: string | number;
  // 自定义列
  slot?: string;
  // 是否是操作列
  action?: boolean;
  // 是否可编辑
  editable?: boolean;
  // 其他列属性
  attrs?: object;
  // 分页
  pagination?: boolean;
};
