import i18n from "@/i18n";
import { User } from "@/mock/model";
import { DescriptionsItem } from "@/types/component";

export enum DescItemLabelEnum {
  USERNAME = "username",
  GENDER = "gender",
  NATION = "nation",
  ROLE = "role",
  MOBILE = "mobile",
  EDUCATION = "education",
  MAJOR = "major",
  RESIDENCE = "residence",
  ENTRY_TIME = "entryTime",
  ADDRESS = "address",
  REMARK = "remark",
}

// TODO:value值为i8n的索引
export const UserInfoDescItemLabel = {
  [DescItemLabelEnum.USERNAME]: "username",
  [DescItemLabelEnum.ROLE]: "role",
  [DescItemLabelEnum.GENDER]: "gender",
  [DescItemLabelEnum.NATION]: "nation",
  [DescItemLabelEnum.MOBILE]: "mobile",
  [DescItemLabelEnum.EDUCATION]: "education",
  [DescItemLabelEnum.MAJOR]: "major",
  [DescItemLabelEnum.RESIDENCE]: "residence",
  [DescItemLabelEnum.ENTRY_TIME]: "entryTime",
  [DescItemLabelEnum.ADDRESS]: "address",
  [DescItemLabelEnum.REMARK]: "remark",
};

export const useUserInfoDescData = (user: User): DescriptionsItem[] => {
  const result: DescriptionsItem[] = [];
  for (const key in UserInfoDescItemLabel) {
    if (Object.prototype.hasOwnProperty.call(UserInfoDescItemLabel, key)) {
      let item: DescriptionsItem = {
        label: i18n.global.t(`userInfo.${key}`),
        content: "" as any,
      };
      const content = user[key];
      if (content + '') {
        item.content = content;
        if (key === DescItemLabelEnum.GENDER) {
          item.slot = key;
        }
        if (key === DescItemLabelEnum.ENTRY_TIME) {
          item.slot = key;
        }
        if (key === DescItemLabelEnum.ROLE) {
          item.slot = key;
        }
        if (key === DescItemLabelEnum.REMARK) {
          item.span = 2;
        }
        result.push(item);
      }
    }
  }
  return result;
};
