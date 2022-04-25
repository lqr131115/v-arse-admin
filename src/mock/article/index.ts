import Mock from "mockjs";
import { articleList } from "../data";
export const getArticleList = (config: any) => {
  return Mock.mock({
    code: 200,
    data: articleList,
    msg: "success",
  });
};

export const getArticleDetail = (config: any) => {
  const { id } = JSON.parse(config.body);
  const detail = articleList.find((r) => r.id === id);
  if (detail) {
    return Mock.mock({
      code: 200,
      data: detail,
      msg: "success",
    });
  } else {
    return Mock.mock({
      code: 200,
      msg: "文章不存在",
    });
  }
};
