import {H3Event} from "h3";
import {countEvents, getAllEvents} from "~/server/database/repositories/eventRepository";

export default defineEventHandler(async (event: H3Event) => {
    const currentPage = Math.max(Number(getQuery(event).currentPage  || 1), 1);
    const q = String(getQuery(event).q || '');
    const perPage: number = 6;



    const events = await getAllEvents(perPage, (currentPage - 1) * perPage, q);

    // cont users
    const eventsCount = await countEvents(q);
    const  pagesCount= Math.ceil(eventsCount / perPage);
    return { events , eventsCount, pagesCount, perPage};
});
