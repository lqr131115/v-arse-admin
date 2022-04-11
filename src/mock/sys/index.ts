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
    data:  {
      role: [
        {
          id: "1",
          name: "superAdmin",
          desc: "我是唯一超管,可以操作系统所有功能",
          level: "T0",
        },
      ],
      _id: "612710a0ec87aa543c9c341d",
      id: "0",
      openTime: "1648821814939",
      username: "super-admin",
      mobile: "188xxxx0001",
      avatar:
        "https://img1.baidu.com/it/u=4259449877,58809073&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
      gender: 1,
      education: "本科",
      major: "软件工程",
      nation: "汉族",
      residence: "繁华大道",
      address: "北京市朝阳区",
      entryTime: "1648821814939",
      remark: "I Miss U",
    },
    code: 200,
    msg: "请求成功",
  });
};
