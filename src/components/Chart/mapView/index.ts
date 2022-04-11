import { App } from "vue";
import mapview from "./src/mapview.vue";
export default {
  install(app: App) {
    app.component("c-map-view", mapview);
  },
};
