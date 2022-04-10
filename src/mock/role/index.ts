import Mock from "mockjs";
import { roleList, userList } from "../data";
import { Role, User } from "../model";
export const getRoleList = (config: any) => {
  return Mock.mock({
    code: 200,
    data: roleList,
    msg: "success",
  });
};

export const getRoleInfoById = (config: any) => {
  const { id } = JSON.parse(config.body);
  const user = userList.find((item: User) => item._id === id);
  if (user) {
    return Mock.mock({
      code: 200,
      data: user.role,
      msg: "success",
    });
  } else {
    return Mock.mock({
      code: 200,
      msg: "用户不存在",
    });
  }
};

export const updateRoleInfoById = (config: any) => {
  const { id, roles } = JSON.parse(config.body);
  const user = userList.find((item: User) => item._id === id);
  if (user) {
    return Mock.mock({
      code: 200,
      data: roleList.filter((item: Role) => roles.includes(item.name)),
      msg: "success",
    });
  } else {
    return Mock.mock({
      code: 200,
      msg: "用户不存在",
    });
  }
};
