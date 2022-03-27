import rgbHex from "rgb-hex";
import hexRgb from "hex-rgb";

export interface IColorRgb {
  blue: number;
  green: number;
  red: number;
  alpha?: number;
}

export enum CONVERT_TYPE {
  SHADE = "shade",
  TINT = "tint",
}

export function convert(val: string) {
  let colorReb: IColorRgb = { red: 0, green: 0, blue: 0 };
  const valArr = val.replace("color(", "").split(",");
  const numArr = valArr[valArr.length - 1].match(/\d+/g);
  const colorValue = valArr[0];
  const num = parseInt(numArr![0]);
  const color = hexRgb(colorValue);
  if (val.includes(CONVERT_TYPE.SHADE)) {
    colorReb = rgbShade(color, num);
  }
  if (val.includes(CONVERT_TYPE.TINT)) {
    colorReb = rgbTint(color, num);
  }
  const r = Math.ceil(colorReb.red);
  const g = Math.ceil(colorReb.green);
  const b = Math.ceil(colorReb.blue);
  const regStr = `rgb(${r},${g},${b})`;
  return rgbHex(regStr);
}

export function rgbTint(rgb: IColorRgb, i: number) {
  return {
    red: rgb.red + (255 - rgb.red) * i * 0.1,
    green: rgb.green + (255 - rgb.green) * i * 0.1,
    blue: rgb.blue + (255 - rgb.blue) * i * 0.1,
  };
}

export function rgbShade(rgb: IColorRgb, i: number) {
  return {
    red: rgb.red * (1 - 0.1 * i),
    green: rgb.green * (1 - 0.1 * i),
    blue: rgb.blue * (1 - 0.1 * i),
  };
}
