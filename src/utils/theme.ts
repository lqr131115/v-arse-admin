/**
 * @description element-plus 修改主题色
 * @author lqr
 */
import axios from "axios";
import formula from "@/constants/formula.json";
import { convert } from "@/utils/color";

/**
 * @description 把生成的样式表写入 style 中
 * @param newStyle string 新样式
 */
export const writeNewStyle = (newStyle: string) => {
  const styleEle = document.createElement("style");
  styleEle.innerHTML = newStyle;
  document.head.appendChild(styleEle);
};

/**
 * @description 根据主题色 生成最新的样式表
 * @param primary 主题色
 * @returns string 新样式表
 */
export const genNewStyle = async (primary: string) => {
  const colors = generateColors(primary);
  let cssText = await getOriginalStyle();
  // 遍历 主题色色值表 替换被打了标签的颜色
  colors &&
    Object.keys(colors).forEach((key) => {
      cssText = cssText.replace(new RegExp("(:|\\s+)" + key, "g"), "$1" + colors[key]);
    });
  return cssText;
};

/**
 * @description 获取主题色值表 包括primary、light-x等
 * @param primary 主题色
 * @returns 
 * {
 *  primary:'#xxx',
 *  light-1:'#xxx',
 *  light-2:'#xxx',
 *  ...
 * }
 */
export const generateColors = (primary: string):any => {
  if (!primary) {
    return;
  }
  const colors = { primary };
  Object.keys(formula).forEach((k) => {
    const value = (formula[k] as string).replace(/primary/g, primary);
    colors[k] = `#${convert(value)}`;
  });
  return colors;
};

/**
 * @description 获取被打完标签的样式表 打了标签即要被替换的
 * @returns string 
 */
export const getOriginalStyle = async (): Promise<string> => {
  const { version = "2.1.4" } = await import("element-plus/package.json");
  const href = `https://unpkg.com/element-plus@${version}/dist/index.css`;
  const { data } = await axios(href);
  return getStyleTmp(data);
};

/**
 * @description 获取替换色值后的最新样式表
 * @param data string element-plus默认样式表
 * @returns string
 */
export const getStyleTmp = (data: string): string => {
  // 要被替换的色值
  const colors: { [key: string]: string } = {
    "#409eff": "primary",
    "#53a8ff": "light-1",
    "#66b1ff": "light-2",
    "#79bbff": "light-3",
    "#8cc5ff": "light-4",
    "#a0cfff": "light-5",
    "#b3d8ff": "light-6",
    "#c6e2ff": "light-7",
    "#d9ecff": "light-8",
    "#ecf5ff": "light-9",
  };
  for (const key in colors) {
    if (Object.prototype.hasOwnProperty.call(colors, key)) {
      const tag = colors[key];
      data = data.replace(new RegExp(key, "ig"), tag);
    }
  }
  return data;
};
