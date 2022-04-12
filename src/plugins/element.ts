import { App } from "vue";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
import 'element-plus/dist/index.css'
import { useAppStore } from "@/store/modules/app";
import { LOCALE } from "@/settings";
export default {
  install(app: App) {
    app.use(ElementPlus, {
      locale: useAppStore().getLanguage === LOCALE.ZH_CN ? zhCn : en,
    });
  },
};
