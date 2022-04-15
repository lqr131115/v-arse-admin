import type { EditorOptions } from "@toast-ui/editor";

export type MKEditorOptions = Omit<EditorOptions, "el">;

export const defaultRichTextOpts = {
  height: 400,
  zIndex: 100,
  showMenuTooltips: true,
};

export const defaultMarkdownOpts:MKEditorOptions = {
  height: "450px",
  previewStyle: "vertical",
  // events: {
  //     change: onContentChange
  // }
  // language: getLanguage.value === LOCALE.EN_US ? 'en' : 'zh-CN',
};
