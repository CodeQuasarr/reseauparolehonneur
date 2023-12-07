import {H3Event} from "h3";
import {countUsers, getAllUsers} from "~/server/database/repositories/userRepository";
import {Role} from "@prisma/client";
import type {Filter} from "~/types/Filter";
import UserService from "~/server/app/services/userService";

export default defineEventHandler(async (event: H3Event) => {
    const currentPage = Math.max(Number(getQuery(event).currentPage  || 1), 1);
    const q = String(getQuery(event).q || '');
    const status: string | null = String(getQuery(event).status);
    const role: string = String(getQuery(event).role);
    const perPage: number = 6;



    const users = await getAllUsers(perPage, (currentPage - 1) * perPage, q, status, role);

    // cont users
    const usersCount = await countUsers(q);
    const  pagesCount= Math.ceil(usersCount / perPage);
    return { users , usersCount, pagesCount, perPage};
});
