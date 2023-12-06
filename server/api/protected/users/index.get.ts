import {H3Event} from "h3";
import {countUsers, getAllUsers} from "~/server/database/repositories/userRepository";
import {Role} from "@prisma/client";

export default defineEventHandler(async (event: H3Event) => {
    const currentPage = Math.max(Number(getQuery(event).page  || 1), 1);
    const q = String(getQuery(event).q || '');
    const perPage: number = 6;


    const users = await getAllUsers(perPage, (currentPage - 1) * perPage, q, Role["USER"]);

    // cont users
    const usersCount = await countUsers(q);
    const  pagesCount= Math.ceil(usersCount / perPage);
    return { users , usersCount, pagesCount, perPage};
});
