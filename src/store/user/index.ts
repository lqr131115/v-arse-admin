import { defineStore } from "pinia";
import router from "@/router";
import * as sysApi from "@/api/sys";
import { TOKEN_KEY } from "@/enums/cacheEnum";
import { setItem, getItem, removeItem } from "@/utils/storage";
export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    token: getItem(TOKEN_KEY) || "",
    userInfo: {},
  }),
  getters: {
    hasUserInfo: (state) => {
      return JSON.stringify(state.userInfo) !== "{}";
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token;
      setItem(TOKEN_KEY, token);
    },
    setUserInfo(info = {}) {
      this.userInfo = info;
    },
    logout() {
      this.setToken("");
      this.setUserInfo({});
      removeItem(TOKEN_KEY);
      router.push("/login");
    },
    async login(data = {}) {
      const res = await sysApi.login(data);
      this.setToken(res.data.token);
      return res;
    },
    async getUserInfo() {
      const res = await sysApi.getUserInfo();
      this.setUserInfo(res.data);
      return res;
    },
  },
});
