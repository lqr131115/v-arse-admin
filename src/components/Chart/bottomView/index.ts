import { App } from "vue";
import bottomView from "./src/bottomView.vue";
export default {
  install(app: App) {
    app.component("c-bottom-view", bottomView);
  },
};
