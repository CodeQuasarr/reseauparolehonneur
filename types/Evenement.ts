import type {IUser} from "~/types/IUser";

export interface Evenement {
    id: string;
    title: string;
    content: string;
    startDate: string;
    startTime: string;
    picture: string | null;
    users: IUser[] | null;
    address: string | null;
}
