import { App } from "vue";
import totalsales from "./src/totalsales.vue";
export default {
  install(app: App) {
    app.component("c-total-sales", totalsales);
  },
};
