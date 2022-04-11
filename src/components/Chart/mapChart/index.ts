import { App } from "vue";
import mapchart from "./src/mapchart.vue";
export default {
  install(app: App) {
    app.component("c-map-chart", mapchart);
  },
};
