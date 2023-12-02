import {sendDefaultErrorResponse} from "~/server/app/errors";
import {getUserById} from "~/server/database/repositories/userRepository";
import UserService from "~/server/app/services/userService";

export default defineEventHandler(async (event) => {
    try {
        const id = String(event.context.params?.id)
        const user = await getUserById(id)

        return UserService.sanitizeUserForFrontend(user)
    } catch (e: any) {
        return await sendDefaultErrorResponse(event, 'oops', 500, e)
    }
});
