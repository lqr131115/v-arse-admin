import { App } from "vue";
import Breadcrumb from "./Breadcrumb";
import Card from "./Card";
import Descriptions from "./Descriptions";
import Dialog from "./Dialog";
import Form from "./Form";
import Menu from "./Menu";
import SvgIcon from "./SvgIcon";
import Table from "./Table";

const components: any[] = [Form, Table, SvgIcon, Menu,Breadcrumb,Descriptions,Dialog,Card];
export default {
  install(app: App) {
    components.forEach((c) => {
      app.use(c);
    });
  },
};
