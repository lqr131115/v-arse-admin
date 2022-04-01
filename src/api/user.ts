import request  from "@/utils/request";
import {RequestEnum} from '@/enums/httpEnum'
export const getStaffList = () => (request({method:RequestEnum.GET,url:'/user/staff/list'}));