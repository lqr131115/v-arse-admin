import { App } from "vue";
import RichText from "./src/richText.vue";
import Markdown from "./src/markdown.vue";

// const editors: any[] = [Markdown, RichText];

export default {
  install(app: App) {
    app.component("m-rich-text", RichText);
    app.component("m-markdown", Markdown);
  },
};
