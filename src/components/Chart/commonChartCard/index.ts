import { App } from "vue";
import commonchartcard from "./src/commonchartcard.vue";
export default {
  install(app: App) {
    app.component("c-common-chart-card", commonchartcard);
  },
};
