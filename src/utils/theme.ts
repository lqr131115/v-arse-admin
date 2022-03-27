/**
 * @description element-plus 修改主题色
 * @author lqr
 */
import axios from "axios";
import formula from "@/constants/formula.json";
import { convert } from "@/utils/color";

// 把生成的样式表写入 style 中
export const writeNewStyle = (newStyle: string) => {
  const styleEle = document.createElement("style");
  styleEle.innerHTML = newStyle;
  document.head.appendChild(styleEle);
};

// 根据主题色 生成最新的样式表
export const genNewStyle = async (primary: string) => {
  // 1.根据主色生成色值表
  const colors = generateColors(primary);
  // 2.获取element-plus的默认样式表,把需要替换的色值打上标签
  const cssText = await getOriginalStyle();
  // 3.遍历色值表 在 默认样式表 进行全局替换
  colors &&
    Object.keys(colors).forEach((key) => {
      cssText.replace(new RegExp("(:|\\s+)" + key, "g"), "$1" + colors[key]);
    });
  return cssText;
};

export const generateColors = (primary: string) => {
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

export const getOriginalStyle = async (): Promise<string> => {
  const { version = "2.1.4" } = await import("element-plus/package.json");
  const href = `https://unpkg.com/element-plus@${version}/dist/index.css`;
  const { data } = await axios(href);
  return getStyleTmp(data);
};

export const getStyleTmp = (data: string): string => {
  // 要替换的色值
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
      const color = colors[key];
      data = data.replace(new RegExp(key, "ig"), color);
    }
  }
  return data;
};
