export const DEFAULT_FILE_NAME = "user-list";

export enum UserRelationEnum {
  USERNAME = "username",
  MOBILE = "mobile",
  ROLE = "role",
  OPEN_TIME = "openTime",
}

export const USER_RELATION = {
  [UserRelationEnum.USERNAME]: "姓名",
  [UserRelationEnum.MOBILE]: "电话",
  [UserRelationEnum.ROLE]: "角色",
  [UserRelationEnum.OPEN_TIME]: "开通时间",
};
