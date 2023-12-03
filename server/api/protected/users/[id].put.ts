import {isHexadecimalString} from "~/utils/config/formValidationsRules";
import UserService from "~/server/app/services/userService";
import {getUserById, updateUser} from "~/server/database/repositories/userRepository";
import {sendDefaultErrorResponse} from "~/server/app/errors";

export default defineEventHandler(async (event) => {

    try {
        const data = await readBody(event);
        const validation = await UserService.validationUserDataFields(data, false);
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
        const user = await getUserById(id);
        if (!user) {
            return sendError(event, createError({ statusCode: 400, data: [{'user': {'message' : 'L\' utilisateur n\' existe pas'} }] }))
        }

        if (data.password) {
            data.password = await UserService.hashedPassword(data.password);
        }

        if (data.avatar) {
            if (user.avatar && data.avatar !== user.avatar) {
                console.log('replace image')
                const fileName = await UserService.replaceImage(user.avatar, data.avatar);
                if (!fileName) {
                    const errors = new Map<string, { message: string | undefined }>()
                    errors.set('avatar', {'message': `Une erreur est survenue lors de la création d'image`})
                    return sendError(event, createError({ statusCode: 400, data: errors }))
                }
                data.avatar = fileName;
            }
            else {
                const fileName = await UserService.downloadAndCheckImage(data.avatar);
                if (!fileName) {
                    const errors = new Map<string, { message: string | undefined }>()
                    errors.set('avatar', {'message': `Une erreur est survenue lors de la création d'image`})
                    return sendError(event, createError({ statusCode: 400, data: errors }))
                }
                data.avatar = fileName;
            }
        }

        const userUpdate = await updateUser(id, data);
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
