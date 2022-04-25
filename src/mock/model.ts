export type User = {
  id: string|number;
  role?: Role[];
  openTime: string;
  username: string;
  avatar: string;
  mobile: string;
  gender: number;
  nation: string;
  residence: string;
  address: string;
  entryTime: string;
  remark: string;
  education: string;
  major: string;
  permission?: { menus?: string[]; points?: string[]; [key: string]: any };
};

export type Role = {
  id: string|number;
  name: string;
  desc: string;
  level: string;
};

export type Permission = {
  id: string|number;
  name: string;
  mark: string;
  desc: string;
  children?: Permission[];
};

export type Article = {
  id: string | number;
  ranking: number;
  title: string;
  author: string;
  publicDate: string;
  desc?: string;
  content?: string;
};
