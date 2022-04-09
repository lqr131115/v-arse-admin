import { App } from "vue";
import auth from "./v-auth";
import focus from "./v-focus";
import print from "./v-print";

const directives = {
  focus,
  print,
  auth
};

export default {
  install(app: App) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key]);
    });
  },
};
