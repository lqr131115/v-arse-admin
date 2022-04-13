import { App } from "vue";
import Breadcrumb from "./Breadcrumb";
import Card from "./Card";
import Descriptions from "./Descriptions";
import Dialog from "./Dialog";
import Chart from "./Chart";
import Form from "./Form";
import Menu from "./Menu";
import SvgIcon from "./SvgIcon";
import Table from "./Table";
import Tree from "./Tree";

const components: any[] = [
  Form,
  Table,
  SvgIcon,
  Menu,
  Breadcrumb,
  Descriptions,
  Dialog,
  Card,
  Chart,
  Tree
];
export default {
  install(app: App) {
    components.forEach((c) => {
      app.use(c);
    });
  },
};
