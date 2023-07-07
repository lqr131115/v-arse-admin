import { App } from "vue";
import commonChart from "./src/commonChart.vue";

export default {
  install(app: App) {
    app.component("c-common-chart", commonChart);
  },
};
