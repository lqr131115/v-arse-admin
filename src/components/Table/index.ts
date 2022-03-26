import { App } from "vue";
import table from "./src/table.vue";
export default {
  install(app: App) {
    app.component("m-table", table);
  },
};
