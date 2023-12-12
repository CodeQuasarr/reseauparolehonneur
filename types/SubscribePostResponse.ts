import type { IUser } from "./IUser";

export type SubscribePostResponse = {
    url :   string;
    user: IUser;
    shouldUpdateUser: boolean;
  };
