export type User = {
  role: any[];
  _id: string;
  id: string;
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
};

export type Role = {
  id: string;
  name: string;
  desc: string;
  level: string;
};
