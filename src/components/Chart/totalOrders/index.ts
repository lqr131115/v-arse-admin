import { App } from "vue";
import totalorders from "./src/totalorders.vue";
export default {
  install(app: App) {
    app.component("c-total-orders", totalorders);
  },
};
