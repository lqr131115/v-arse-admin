import Mock from "mockjs";
import * as sys from "./sys";
import * as user from "./user";

Mock.setup({
  timeout: "300-600",
});

// sys
Mock.mock("/mock/sys/login", "post", sys.login);
Mock.mock("/mock/sys/profile", "get", sys.getUserProfile);

// user
Mock.mock('/mock/user/list', 'post', user.getUserList);