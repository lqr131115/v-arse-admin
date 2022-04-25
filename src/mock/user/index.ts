import Mock from "mockjs";
import { userList } from "../data";
import { User } from "../model";
export const getUserList = (config: any) => {
  const { currentPage, pageSize } = JSON.parse(config.body);
  if (!currentPage && !pageSize) {
    return Mock.mock({
      code: 200,
      data: {
        list: userList,
        total: userList.length,
      },
      msg: "success",
    });
  }
  function _getUserList(pageIndex: number, pageSize: number) {
    let offset = pageIndex - 1;
    if (offset === 0) {
      offset = pageSize;
      return userList.slice(0, offset);
    } else {
      offset = offset * pageSize;
      return userList.slice(offset, offset + pageSize);
    }
  }

  return Mock.mock({
    code: 200,
    data: {
      list: _getUserList(currentPage, pageSize),
      total: userList.length,
      page: currentPage,
      size: pageSize,
    },
    msg: "success",
  });
};

export const getUserInfoById = (config: any) => {
  const { id } = JSON.parse(config.body);
  const user = userList.find((item: User) => item.id === id);
  if (user) {
    return Mock.mock({
      code: 200,
      data: user,
      msg: "success",
    });
  } else {
    return Mock.mock({
      code: 200,
      msg: "用户不存在",
    });
  }
};
