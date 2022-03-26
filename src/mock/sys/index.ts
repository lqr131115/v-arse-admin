import Mock from "mockjs";
import md5 from "md5";
/**
 * @param config 对象 键值如下
 * body: "{\"username\":\"admin\",\"password\":\"123456\"}"
 * type: "POST"
 * url: "/mock/sys/login"
 * @returns
 */
export const login = (config: any) => {
  const { username, password } = JSON.parse(config.body);

  if (username === "admin" && password === md5("123123")) {
    return Mock.mock({
      data: {
        token: "Bearer 4378488sdsd29399281xjdjfkdf",
      },
      code: 200,
      msg: "请求成功",
    });
  } else {
    return Mock.mock({
      code: 401,
      msg: "账号或者密码错误",
      data: {},
    });
  }
};

export const getUserProfile = (config: any) => {
  return Mock.mock({
    data: {
      role: [
        {
          id: "1",
          title: "超级管理员",
        },
      ],
      _id: "612710a0ec87aa543c9c341d",
      id: "0",
      username: "super-admin",
      title: "超级管理员",
      avatar:
        "https://img1.baidu.com/it/u=2716398045,2043787292&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800",
      permission: {
        menus: [
          "userManage",
          "roleList",
          "permissionList",
          "articleRanking",
          "articleCreate",
        ],
        points: [
          "distributeRole",
          "importUser",
          "removeUser",
          "distributePermission",
        ],
      },
    },
    code: 200,
    msg: "请求成功",
  });
};
