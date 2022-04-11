import request  from "@/utils/request";
import {RequestEnum} from '@/enums/httpEnum'

export const login = (data = {}) => (request({method:RequestEnum.POST,url:'/sys/login',data}));
export const getUserProfile = () => (request({method:RequestEnum.GET,url:'/sys/profile'}));