import { App } from "vue";
import svgIcon from "./src/svgIcon.vue";
export default {
  install(app: App) {
    app.component("svg-icon", svgIcon);
  },
};
