import { App } from "vue";
import todayusers from "./src/todayusers.vue";
export default {
  install(app: App) {
    app.component("c-today-users", todayusers);
  },
};
