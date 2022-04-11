import { App } from "vue";
import topview from "./src/topview.vue";
export default {
  install(app: App) {
    app.component("c-top-view", topview);
  },
};
