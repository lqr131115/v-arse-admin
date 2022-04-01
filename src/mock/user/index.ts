import Mock from "mockjs";

export const getStaffList = (config: any) => {
  return Mock.mock({
    code: 200,
    data: {
      list: [
        {
          role: [
            {
              id: "1",
              title: "超级管理员",
            },
          ],
          _id: "612710a0ec87aa543c9c341d",
          id: "0",
          openTime: "1648821814939",
          username: "super-admin",
          mobile: "188xxxx0001",
          avatar:
            "https://img1.baidu.com/it/u=4259449877,58809073&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
        },
        {
          role: [
            {
              id: "2",
              title: "管理员",
            },
          ],
          _id: "612710a0ec87aa543c9c341e",
          id: "1",
          username: "admin",
          openTime: "1648821000000",
          mobile: "188xxxx0002",
          avatar:
            "https://img1.baidu.com/it/u=3890180243,28045940&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        },
      ],
      total: 7,
      page: 1,
      size: 2,
    },
    msg: "success",
  });
};
