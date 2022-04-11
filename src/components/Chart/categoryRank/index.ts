import { App } from "vue";
import categoryrank from "./src/categoryrank.vue";
export default {
  install(app: App) {
    app.component("c-category-rank", categoryrank);
  },
};
