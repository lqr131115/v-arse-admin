import { App } from "vue";
import hotsearch from "./src/hotsearch.vue";
export default {
  install(app: App) {
    app.component("c-hot-search", hotsearch);
  },
};
