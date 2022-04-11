import { App } from "vue";
import commonCard from "./commonCard";
import commonCard2 from "./commonCard2";
import commonChart from "./commonChart";
const components: any[] = [
  commonCard,
  commonChart,
  commonCard2,
];

export default {
  install(app: App) {
    components.forEach((c) => {
      app.use(c);
    });
  },
};
