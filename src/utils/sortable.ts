import Sortable from "sortablejs";
import type { Options } from "sortablejs";

export const initSortable = (el: HTMLElement, options: Options) => {
  Sortable.create(el, options);
};
