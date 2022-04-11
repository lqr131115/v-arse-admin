import { App } from "vue";
import totalusers from "./src/totalusers.vue";
export default {
  install(app: App) {
    app.component("c-total-users", totalusers);
  },
};
