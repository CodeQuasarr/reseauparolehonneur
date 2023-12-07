import type {Role} from ".prisma/client";

export interface Filter {
    page: number,
    q: string,
    status: string | null,
    role: Role | null,
}
