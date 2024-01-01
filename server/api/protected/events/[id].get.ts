import {sendDefaultErrorResponse} from "~/server/app/errors";
import {getEventById} from "~/server/database/repositories/eventRepository";

export default defineEventHandler(async (event) => {
    try {
        const id = String(event.context.params?.id)
        const evenement = await getEventById(id)
        return evenement;
    } catch (e: any) {
        return await sendDefaultErrorResponse(event, 'oops', 500, e)
    }
});
