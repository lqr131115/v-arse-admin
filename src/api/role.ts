import request  from "@/utils/request";
import {RequestEnum} from '@/enums/httpEnum'

export const getRoleList = () => (request({method:RequestEnum.GET,url:'/role/list'}));
export const getRoleInfoByUserId = (data = {}) => (request({method:RequestEnum.POST,url:'/role/info',data}));
export const updateRoleInfoByUserId = (data = {}) => (request({method:RequestEnum.POST,url:'/role/update',data}));