import request from "@/utils/request";
import {RequestEnum} from "@/enums/httpEnum";

export const getArticleList = () => request({method:RequestEnum.GET,url:'/article/list'});
export const getArticleDetail = (data = {}) => request({method:RequestEnum.POST,url:'/article/detail',data});