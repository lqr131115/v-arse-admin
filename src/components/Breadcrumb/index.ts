import { App } from "vue";
import breadcrumb from "./src/breadcrumb.vue";
export default {
  install(app: App) {
    app.component("m-breadcrumb", breadcrumb);
  },
};
