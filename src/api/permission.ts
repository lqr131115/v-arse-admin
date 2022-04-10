import request from "@/utils/request";
import {RequestEnum} from "@/enums/httpEnum";

export const getPermissionList =  () => (request({method:RequestEnum.GET,url:'/permission/list'}));