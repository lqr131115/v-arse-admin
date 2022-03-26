/**
 * @description element-plus 通知组件 二次封装(需要?)
 * @author lqr
 */

import { ElMessage,ElMessageBox,ElNotification  } from 'element-plus'
// export type NoticeType = 'info' | 'success' | 'warning' | 'error' 

// message 类型不能定死为 string  可以是VNode等
// export const message = (message:any,type:NoticeType) => ElMessage({message,type})

export const msgInfo = (message:string) => ElMessage({message,type:'info'})
export const msgSuccess = (message:string) => ElMessage({message,type:'success'})
export const msgWarning = (message:string) => ElMessage({message,type:'warning'})
export const msgError = (message:string) => ElMessage({message,type:'error'})

export const msgBoxInfo = (message:string) => ElMessageBox({message,type:'info'});
export const msgBoxSuccess = (message:string) => ElMessageBox({message,type:'success'});
export const msgBoxWarning = (message:string) => ElMessageBox({message,type:'warning'});
export const msgBoxError = (message:string) => ElMessageBox({message,type:'error'});

export const noticeInfo = (message:string,title:string = 'Info' ) => ElNotification({title,message,type: "info",});
export const noticeSuccess = (message:string,title:string = 'Success' ) => ElNotification({title,message,type: "success",});
export const noticeWarning = (message:string,title:string = 'Warning' ) => ElNotification({title,message,type: "warning",});
export const noticeError = (message:string,title:string = 'Error' ) => ElNotification({title,message,type: "error",});

