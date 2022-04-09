import zh from "./zh";
import en from "./en";
import userZh from '@/views/user/i18n/zh'
import userEn from '@/views/user/i18n/en'

export const getZh = () => ({...zh, ...userZh});
export const getEn = () => ({...en,...userEn})