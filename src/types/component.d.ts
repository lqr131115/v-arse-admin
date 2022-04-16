/**
 * 全局注册的自定义组件
 */
import { RuleItem } from "@/components/Form/rule";
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

export type DescriptionsItem = {
  label: string;
  labelAlign?: "left" | "center" | "right";
  icon?: string;
  slot?: string;
  content: any;
  align?: "left" | "center" | "right";
  width?: number;
  span?: number;
};

export type TreeProps = {
  label: string | Function;
  children: string;
  isLeaf?: string | Function;
  disabled?: string | Function;
  class?: string | Function;
};

export type FormItem =
  | "cascader"
  | "checkbox"
  | "checkbox-group"
  | "checkbox-button"
  | "color-picker"
  | "date-picker"
  | "input"
  | "input-number"
  | "radio"
  | "radio-group"
  | "radio-button"
  | "rate"
  | "select"
  | "option"
  | "slider"
  | "switch"
  | "time-picker"
  | "time-select"
  | "transfer"
  | "upload"
  | "rich-text"
  | "markdown";

export type FormOptions = {
  // 表单项的类型
  type: FormItem;
  // 表单项的值
  value?: any;
  // 表单项的标签
  label?: string;
  // 表单项的标识
  prop?: string;
  // 表单项的验证规则
  rule?: RuleItem[];
  // 表单项的占位符
  placeholder?: string;
  // 表单项的特有属性
  attrs?: {
    // style?: CSSProperties;
    // disabled?: boolean;
    // showPassword?: boolean;
    // clearable?: boolean;
  };
  // 表单项的子元素
  children?: FormOptions[];
  // 上传组件属性
  uploadAttrs?: {
    action: string;
    headers?: object;
    method?: "post" | "put" | "patch";
    multiple?: boolean;
    data?: object;
    name?: string;
    withCredentials?: boolean;
    showFileList?: boolean;
    drag?: boolean;
    accept?: string;
    thumbnailMode?: boolean;
    fileList?: any[];
    listType?: string;
    autoUpload?: boolean;
    disabled?: boolean;
    limit?: number;
  };
};
