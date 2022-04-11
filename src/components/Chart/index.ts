import { App } from "vue";
import commonCard from "./commonCard";
import commonCard2 from "./commonCard2";
const components: any[] = [
  commonCard,
  commonCard2,
];

export default {
  install(app: App) {
    components.forEach((c) => {
      app.use(c);
    });
  },
};
