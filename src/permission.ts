/**
 * @description pp 验权
 * @author lqr
 */
import router from "@/router";
import { useUserStore } from "@/store/modules/user";
import { useAppStore } from "@/store/modules/app";
import { isTimeout } from "@/utils/auth";
import { msgError } from "@/utils/notice";
import { PageEnum } from "@/enums/pageEnum";

/**
 * 路由前置守卫
 */

// 白名单
const LOGIN_PATH = PageEnum.BASE_LOGIN;
const ERROR_404__PATH = PageEnum.ERROR_PAGE__404;
const ERROR_401__PATH = PageEnum.ERROR_PAGE__401;
const whitePathList: string[] = [LOGIN_PATH, ERROR_404__PATH, ERROR_401__PATH];

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const appStore = useAppStore();
  if (userStore.token) {
    // 用户已登录 不能回到login页
    if (to.path === LOGIN_PATH) {
      if (appStore.lockScreen.isLock) {
        next()
      }else{
        next("/");
      } 
    } else {
      // 被动退出 主动处理(前端记录token时效处理)
      if (isTimeout()) {
        userStore.logout();
        msgError("token失效");
        return Promise.reject("token失效");
      }
      // 每次刷新都要请求用户信息
      if (!userStore.hasUserProfile) {
        userStore.getUserProfile();
      }
      next();
    }
  } else {
    // 用户未登录 只能前往白名单页
    if (~whitePathList.indexOf(to.path)) {
      next();
    } else {
      // 404
      // if (to.matched && to.matched.length && to.matched[0].name === '404') {
      //     next()
      // }
      next(LOGIN_PATH);
    }
  }
});
