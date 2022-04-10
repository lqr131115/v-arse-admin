import Mock from "mockjs";
import { roleList } from "../data";
export const getRoleList = (config: any) => {
  return Mock.mock({
    code: 200,
    data: roleList,
    msg: "success",
  });
};
