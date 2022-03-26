import { App } from "vue";
import Form from "./Form";
import Menu from "./Menu";
import SvgIcon from "./SvgIcon";
import Table from "./Table";

const components: any[] = [Form, Table, SvgIcon, Menu];

export default {
  install(app: App) {
    components.forEach((c) => {
      app.use(c);
    });
  },
};
