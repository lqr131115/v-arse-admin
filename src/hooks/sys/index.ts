import { computed } from "vue";
import { useUserStore } from "@/store/user";

export const useUser = () => {
  const userStore = useUserStore();
  const userProfile = computed(() => userStore.gotUserProfile);
  const token = computed(() => userStore.token);

  return {
    userProfile,
    token
  }
}
