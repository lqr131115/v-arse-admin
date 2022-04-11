import { App } from "vue";
import keywordsearch from "./src/keywordsearch.vue";
export default {
  install(app: App) {
    app.component("c-keyword-search", keywordsearch);
  },
};
