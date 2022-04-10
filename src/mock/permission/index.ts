import Mock from "mockjs";
import { permissionList } from "../data";
export const getPermissionList = (config: any) => {
  return Mock.mock({
    code: 200,
    data: permissionList,
    msg: "success",
  });
};
