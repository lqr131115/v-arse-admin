import layout from "@/layout/layout.vue";
import * as C from '../constants'
export default {
  path: "/article",
  redirect: "/article/detail",
  component: layout,
  children: [
    {
      path: "/article/detail",
      name: C.ARTICLE_DETAIL_NAME,
      component: () => import("@/views/article/detail/articleDetail.vue"),
      meta: { title: "articleDetail", icon: "notebook" },
    },
    {
      path: "/article/rank",
      name: C.ARTICLE_RANK_NAME,
      component: () => import("@/views/article/rank/articleRank.vue"),
      meta: { title: "articleRank", icon: "trophy" },
    },
    {
      path: "/article/create",
      name: C.ARTICLE_CREATE_NAME,
      component: () => import("@/views/article/create/articleCreate.vue"),
      meta: { title: "articleCreate", icon: "edit-pen" },
    },
  ],
  meta: { title: "article", icon: "management" },
};
