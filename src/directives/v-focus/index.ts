export default {
  mounted(el: HTMLElement, binding: any) {
    const iptEle = el.querySelector("input");
    iptEle && iptEle.focus();
  },
  beforeUnmount(el: HTMLElement) {
    const iptEle = el.querySelector("input");
    iptEle && iptEle.blur();
  },
};
