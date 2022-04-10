import request  from "@/utils/request";
import {RequestEnum} from '@/enums/httpEnum'

export const getRoleList = () => (request({method:RequestEnum.GET,url:'/role/list'}));
