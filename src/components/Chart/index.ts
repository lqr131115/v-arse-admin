import { App } from "vue";
import bottomView from "./bottomView";
import categoryRank from "./categoryRank";
import commonCard from "./commonCard";
import commonCard2 from "./commonCard2";
import commonChart from "./commonChart";
import hotSearch from "./hotSearch";
import keywordSearch from "./keywordSearch";
import mapChart from "./mapChart";
import mapView from "./mapView";
import monthIncrease from "./monthIncrease";
import salesView from "./salesView";
import todayUsers from "./todayUsers";
import topView from "./topView";
import totalOrders from "./totalOrders";
import totalSales from "./totalSales";
import totalUsers from "./totalUsers";
const components: any[] = [
  bottomView,
  commonCard,
  mapView,
  salesView,
  todayUsers,
  topView,
  totalOrders,
  totalSales,
  totalUsers,
  commonChart,
  keywordSearch,
  categoryRank,
  commonCard2,
  hotSearch,
  monthIncrease,
  mapChart,
];

export default {
  install(app: App) {
    components.forEach((c) => {
      app.use(c);
    });
  },
};
