/**
 * @description 全局注册element-plus icon
 * @author lqr
 */

import { App } from "vue";
import * as Icons from "@element-plus/icons-vue";
export default {
  install(app: App) {
    for (const key in Icons) {
      // Because HTML standard has already defined a tag named menu, so you need to use an alias in order to render the icon, if you register Menu directly it will not work.
      if (key.toLowerCase() === "menu") {
        app.component(`icon-menu`, Icons[key]);
      } else {
        app.component(key, Icons[key]);
      }
    }
  },
};
