export type User = {
  role: Role[];
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

export type Permission = {
  id:string,
  name:string,
  mark:string,
  desc:string,
  children?:Permission[]
}