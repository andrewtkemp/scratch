export type User = {
  id:string;
  username:string;
  password:string;
  paid:boolean;
};


export enum UserFilter {
  ALL_USERS = "ALL_USERS",
  PREMIUM_USERS = "PREMIUM_USERS"
}