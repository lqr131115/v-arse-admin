import Mock from "mockjs";
import * as sys from "./sys";

Mock.setup({
  timeout: "300-600",
});

// sys
Mock.mock("/mock/sys/login", "post", sys.login);
Mock.mock("/mock/sys/profile", "get", sys.getUserProfile);
