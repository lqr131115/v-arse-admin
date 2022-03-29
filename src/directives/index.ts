import { App } from "vue";
import focus from "./v-focus";

const directives = {
  focus,
};

export default {
  install(app: App) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key]);
    });
  },
};
