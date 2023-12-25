import {isHexadecimalString} from "~/utils/config/formValidationsRules";
import {sendDefaultErrorResponse} from "~/server/app/errors";
import EventService from "~/server/app/services/eventService";
import {getEventById, updateEvent} from "~/server/database/repositories/eventRepository";

export default defineEventHandler(async (event) => {

    try {
        const data = await readBody(event);
        const validation = await EventService.validationEventDataFields(data, false);
        if (validation.hasErrors && validation.errors) {
            const errors = JSON.stringify(Object.fromEntries(validation.errors))
            return sendError(event, createError({statusCode: 422, data: errors}))
        }
        const id = String(event.context.params?.id);
        if (!isHexadecimalString(id)) {
            return sendError(event, createError({
                statusCode: 400,
                statusMessage: "Invalid id",
            }));
        }
        const evenement = await getEventById(id);
        if (!evenement) {
            return sendError(event, createError({ statusCode: 400, data: [{'evenement': {'message' : 'L\' évènement n\' existe pas'} }] }))
        }



        data.startDate = new Date(data.startDate);
        if (data.picture && !(data.picture === evenement.picture)) {
            if (evenement.picture && evenement.picture !== 'default.jpg' && data.picture !== evenement.picture ) {

                const fileName = await EventService.replaceImage(evenement.picture, data.picture);
                if (!fileName) {
                    const errors = new Map<string, { message: string | undefined }>()
                    errors.set('picture', {'message': `Une erreur est survenue lors de la création d'image`})
                    return sendError(event, createError({ statusCode: 400, data: errors }))
                }
                data.picture = fileName;
            }
            else {
                const fileName = await EventService.downloadAndCheckImage(data.picture);
                if (!fileName) {
                    const errors = new Map<string, { message: string | undefined }>()
                    errors.set('picture', {'message': `Une erreur est survenue lors de la création d'image`})
                    return sendError(event, createError({ statusCode: 400, data: errors }))
                }
                data.picture = fileName;
            }
        }

        const userUpdate = await updateEvent(id, data);
        if (!userUpdate) {
            return sendError(event, createError({
                statusCode: 500,
                statusMessage: "Internal server error",
            }));
        }
        return userUpdate;
    } catch (e: any) {
        return await sendDefaultErrorResponse(event, 'oops', 500, e.message)
    }
});
