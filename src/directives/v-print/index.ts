import print, { Configuration } from "print-js";
import "print-js/dist/print.css";

export default {
  mounted(el: HTMLElement, binding: any) {
    el.addEventListener("click", () => {
      const config: Configuration = binding.value;
      print(config);
    });
  },
  unmounted(el: HTMLElement) {
    el.removeEventListener("click", () => {
      console.log("remove v-print");
    });
  },
};
