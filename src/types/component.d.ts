/**
 * 全局注册的自定义组件
 */
export interface IMenuItem {
  index: string;
  name: string;
  icon?: string;
  i?: string; // 无限嵌套时的icon
  children?: IMenuItem[];
}
