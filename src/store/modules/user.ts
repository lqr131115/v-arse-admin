import { defineStore } from "pinia";
import router from "@/router";
import * as sysApi from "@/api/sys";
import { TOKEN_KEY } from "@/enums/cacheEnum";
import { setItem, getItem, removeItem } from "@/utils/storage";
import { isNull } from "@/utils/validate";
export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    token: getItem(TOKEN_KEY) || "",
    userProfile: {},
  }),
  getters: {
    hasUserProfile: (state) => {
      return !isNull(state.userProfile)
    },
    getToken: (state) => {
      return state.token;
    },
    gotUserProfile: (state) => {
      return state.userProfile;
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token;
      setItem(TOKEN_KEY, token);
    },
    setUserProfile(profile = {}) {
      this.userProfile = profile;
    },
    logout() {
      console.log('logout');
      this.setToken("");
      removeItem(TOKEN_KEY);
      router.push("/login");
    },
    async login(data = {}) {
      const res = await sysApi.login(data);
      this.setToken(res.data.token);
      return res;
    },
    async getUserProfile() {
      const res = await sysApi.getUserProfile({ role: this.getToken });
      this.setUserProfile(res.data);
      return res;
    },
  },
});
