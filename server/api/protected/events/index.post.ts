import {sendDefaultErrorResponse} from "~/server/app/errors";
import EventService from "~/server/app/services/eventService";
import {createEvent} from "~/server/database/repositories/eventRepository";

export default defineEventHandler(async (event) => {
    try {
        const data = await readBody(event);
        const validation = await EventService.validationEventDataFields(data);

        if (validation.hasErrors && validation.errors) {
            const errors = JSON.stringify(Object.fromEntries(validation.errors))
            return sendError(event, createError({ statusCode: 422, data: errors }))
        }

        if (data.picture) {
            const fileName = await EventService.downloadAndCheckImage(data.picture);
            if (!fileName) {
                const errors = new Map<string, { message: string | undefined }>()
                errors.set('picture', {'message': `Une erreur est survenue lors de la création d'image`})
                return sendError(event, createError({ statusCode: 400, data: errors }))
            }
            data.picture = fileName;
        } else {
            data.picture = 'default.jpg';
        }

        data.startDate = new Date(data.startDate);
        data.title = data.title.toUpperCase();
        data.content = data.content.charAt(0).toUpperCase() + data.content.slice(1).toLowerCase();

        const evenement = await createEvent(data);

        return {id: evenement.id};

    } catch (e: any) {
        return await sendDefaultErrorResponse(event, 'oops', 500, e)
    }
});
