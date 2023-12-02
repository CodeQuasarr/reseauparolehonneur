import {H3Event} from "h3";
import {countUsers, getAllUsers} from "~/server/database/repositories/userRepository";

export default defineEventHandler(async (event: H3Event) => {
    const currentPage = Math.max(Number(getQuery(event).page  || 1), 1);
    const perPage: number = 6;


    const users = await getAllUsers(perPage, (currentPage - 1) * perPage);

    // cont users
    const usersCount = await countUsers();
    const  pagesCount= Math.ceil(usersCount / perPage);
    return { users , usersCount, pagesCount, perPage};
});
