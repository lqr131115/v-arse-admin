import Mock from "mockjs";
import {articleList} from '../data'
export const getArticleList = (config:any) => {
    return Mock.mock({
        code: 200,
        data: articleList,
        msg: "success",
    })
}