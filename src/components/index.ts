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
import Editor from "./Editor";

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
  Tree,
  Editor
];
export default {
  install(app: App) {
    components.forEach((c) => {
      app.use(c);
    });
  },
};
