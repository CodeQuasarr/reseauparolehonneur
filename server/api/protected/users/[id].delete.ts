import {sendDefaultErrorResponse} from "~/server/app/errors";
import {isHexadecimalString} from "~/utils/config/formValidationsRules";
import {deleteUser} from "~/server/database/repositories/userRepository";

export default defineEventHandler(async (event) => {
    try{
        const id = String(event.context.params?.id);
        if (!isHexadecimalString(id)) {
            return await sendDefaultErrorResponse(event, 'Not fount', 404, 'Invalid id')
        }
        const user = await deleteUser(id);
        if (!user) {
            return await sendDefaultErrorResponse(event, 'Not fount', 404, 'User not found')
        }
        return Promise.resolve({
            statusCode: 201,
            statusMessage: 'L\' utilisateur a bien été supprimé',
        })
    } catch (e: any) {
        return await sendDefaultErrorResponse(event, 'oops', 500, e.message)
    }
});
