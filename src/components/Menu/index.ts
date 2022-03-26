import { App } from "vue";
import menu from "./src/menu.vue";
import infiniteMenu from "./src/infinite-menu";

export default {
  install(app: App) {
    app.component("m-menu", menu);
    app.component("m-infinite-menu", infiniteMenu);
  },
};
