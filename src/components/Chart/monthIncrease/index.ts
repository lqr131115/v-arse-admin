import { App } from "vue";
import monthincrease from "./src/monthincrease.vue";
export default {
  install(app: App) {
    app.component("c-month-increase", monthincrease);
  },
};
