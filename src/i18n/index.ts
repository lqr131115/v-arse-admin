import { createI18n } from "vue-i18n";
import { getItem } from "@/utils/storage";
import { LOCALE_KEY } from "@/enums/cacheEnum";
import { LOCALE } from "@/settings";
import * as L from './locale'

const messages = {
  [LOCALE.ZH_CN]: L.getZh(),
  [LOCALE.EN_US]: L.getEn(),
};
const i18n = createI18n({
  // $t() 函数将注册到全局
  globalInjection: true,
  // composition api中使用需要设置为false
  legacy: false,
  locale: getItem(LOCALE_KEY) || LOCALE.ZH_CN,
  messages,
});

export default i18n;
