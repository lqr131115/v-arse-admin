import layout from "@/layout/layout.vue";
import * as C from '../constants'
export default [
  {
    path: "/article",
    redirect: "/article/rank",
    component: layout,
    name: C.ARTICLE_DETAIL_NAME,
    children: [
      {
        path: "/article/detail/:id",
        component: () => import("@/views/article/detail/articleDetail.vue"),
        props: true,
        meta: { title: "articleDetail"},
      },
    ],
    meta: { title: "article", icon: "management" },
  }, 
  {
    path: "/article",
    redirect: "/article/rank",
    component: layout,
    name: C.ARTICLE_RANK_NAME,
    children: [
      {
        path: "/article/rank",
        component: () => import("@/views/article/rank/articleRank.vue"),
        meta: { title: "articleRank", icon: "trophy" },
      },
    ],
    meta: { title: "article", icon: "management" },
  },
  {
    path: "/article",
    redirect: "/article/rank",
    component: layout,
    name: C.ARTICLE_CREATE_NAME,
    children: [
      {
        path: "/article/create",
        component: () => import("@/views/article/create/articleCreate.vue"),
        meta: { title: "articleCreate", icon: "edit-pen" },
      }
    ],
    meta: { title: "article", icon: "management" },
  },
  {
    path: "/article",
    redirect: "/article/rank",
    component: layout,
    name: C.ARTICLE_EDIT_NAME,
    children: [
      {
        path: "/article/edit/:id",
        component: () => import("@/views/article/create/articleCreate.vue"),
        props:true,
        meta: { title: "articleEdit" },
      },
    ],
    meta: { title: "article", icon: "management" },
  },
]

