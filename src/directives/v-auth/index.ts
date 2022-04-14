import { useUser } from "@/hooks/sys";
import { isArray } from "@/utils/validate";
function checkAuth(el: HTMLElement, binding: any) {
  const { userProfile } = useUser();
  const points = (userProfile.value as any).permission.points;
  let { value, modifiers } = binding;
  function remove(el:HTMLElement) {
    el.parentNode && el.parentNode.removeChild(el)
  }
  function hide(el:HTMLElement){
    el.style.display = 'none'
  }
  if (value && isArray(value)) {
    let has = false;
    if (modifiers.every) {
      has = value.every((item) => points.includes(item));
    } else {
      has = value.some((item) => points.includes(item));
    }
    if (!has) {
      remove(el) // or hide
    }
  } else {
    throw Error("v-auth value must be array");
  }
}

export default {
  mounted(el: HTMLElement, binding: any) {
    checkAuth(el, binding);
  },
  beforeUnmount(el: HTMLElement) {},
};
