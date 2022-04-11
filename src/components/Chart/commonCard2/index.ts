import { App } from "vue";
import commoncard2 from "./src/commoncard2.vue";
export default {
  install(app: App) {
    app.component("c-common-card2", commoncard2);
  },
};
