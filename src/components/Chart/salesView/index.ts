import { App } from "vue";
import salesview from "./src/salesview.vue";
export default {
  install(app: App) {
    app.component("c-sales-view", salesview);
  },
};
