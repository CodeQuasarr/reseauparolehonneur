import type {Role} from ".prisma/client";

export interface IUser {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    rememberMe?: boolean;
    avatar?: string | null;
    isVerified?: boolean;
    role?: Role;
    job?: string | null;
    stripeCustomerId?: string | null;
}
