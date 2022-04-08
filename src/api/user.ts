import request  from "@/utils/request";
import {RequestEnum} from '@/enums/httpEnum'
export const getUserList = (data = {}) => (request({method:RequestEnum.POST,url:'/user/list',data}));
export const getUserInfoById = (data = {}) => (request({method:RequestEnum.POST,url:'/user/info',data}));