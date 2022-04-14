import Mock from "mockjs";
import * as sys from "./sys";
import * as user from "./user";
import * as role from "./role";
import * as permission from "./permission";
import * as article from "./article";

Mock.setup({
  timeout: "300-600",
});

// sys
Mock.mock("/mock/sys/login", "post", sys.login);
Mock.mock("/mock/sys/profile", "post", sys.getUserProfile);

// user
Mock.mock('/mock/user/list', 'post', user.getUserList);
Mock.mock('/mock/user/info', 'post', user.getUserInfoById);

// role
Mock.mock('/mock/role/list', 'get', role.getRoleList);
Mock.mock('/mock/role/info', 'post', role.getRoleInfoById);
Mock.mock('/mock/role/update', 'post', role.updateRoleInfoById);

// permission
Mock.mock('/mock/permission/list', 'get', permission.getPermissionList);

// article
Mock.mock('/mock/article/list', 'get', article.getArticleList);
Mock.mock('/mock/article/detail', 'post', article.getArticleDetail);