import { BAIDU_MAP_SRC } from "@/constants";

export const initBMapScript = () => {
  return new Promise((resolve, reject) => {
    if ((window as any).BMap) {
      return resolve("BMap has been loaded");
    } else {
      (window as any).onBMapCallback = function () {
        resolve("baidu map script init success");
      };
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = BAIDU_MAP_SRC + "&callback=onBMapCallback";
      script.onerror = () => {
        reject("baidu map script init failed");
      };
      document.head.appendChild(script);
    }
  });
};
