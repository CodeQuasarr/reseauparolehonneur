import {sendDefaultErrorResponse} from "~/server/app/errors";
import {isHexadecimalString} from "~/utils/config/formValidationsRules";
import {deleteEvent} from "~/server/database/repositories/eventRepository";

export default defineEventHandler(async (event) => {
    try{
        const id = String(event.context.params?.id);
        if (!isHexadecimalString(id)) {
            return await sendDefaultErrorResponse(event, 'Not fount', 404, 'Identifiant invalide')
        }
        const user = await deleteEvent(id);
        if (!user) {
            return await sendDefaultErrorResponse(event, 'Not fount', 404, 'Evènement non trouvé')
        }
        return Promise.resolve({
            statusCode: 201,
            statusMessage: 'L\' évènement a bien été supprimé',
        })
    } catch (e: any) {
        return await sendDefaultErrorResponse(event, 'oops', 500, e.message)
    }
});
