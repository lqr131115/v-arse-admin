import { App } from "vue";
import commonChart from "./commonChart";
import commonChartCard from "./commonChartCard";
const components: any[] = [commonChart, commonChartCard];

export default {
  install(app: App) {
    components.forEach((c) => {
      app.use(c);
    });
  },
};
