import type {IUser} from "~/types/IUser";

export interface Evenement {
    id: string;
    title: string;
    content: string;
    startDate: string;
    startTime: boolean;
    picture: string | null;
    users: IUser[] | null;
}
