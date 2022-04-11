import { defineStore } from "pinia";
import router from "@/router";
import * as sysApi from "@/api/sys";
import { TOKEN_KEY } from "@/enums/cacheEnum";
import { setItem, getItem, removeItem } from "@/utils/storage";
export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    token: getItem(TOKEN_KEY) || "",
    userProfile: {},
  }),
  getters: {
    hasUserProfile: (state) => {
      return JSON.stringify(state.userProfile) !== "{}";
    },
    gotUserProfile: (state) => {
      return state.userProfile;
    }
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
      this.setToken("");
      this.setUserProfile({});
      removeItem(TOKEN_KEY);
      router.push("/login");
    },
    async login(data = {}) {
      const res = await sysApi.login(data);
      this.setToken(res.data.token);
      return res;
    },
    async getUserProfile() {
      const res = await sysApi.getUserProfile();
      this.setUserProfile(res.data);
      return res;
    },
  },
});
