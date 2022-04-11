import { App } from "vue";
import commoncard from "./src/commoncard.vue";

export default {
  install(app: App) {
    app.component("c-common-card", commoncard);
  },
};
