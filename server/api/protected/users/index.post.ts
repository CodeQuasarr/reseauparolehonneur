import UserService from "~/server/app/services/userService";
import {createUser} from "~/server/database/repositories/userRepository";
import {sendDefaultErrorResponse} from "~/server/app/errors";

export default defineEventHandler(async (event) => {
    try {
        const data = await readBody(event);
        const validation = await UserService.validationUserDataFields(data);

        if (validation.hasErrors && validation.errors) {
            const errors = JSON.stringify(Object.fromEntries(validation.errors))
            return sendError(event, createError({ statusCode: 422, data: errors }))
        }

        if (data.avatar) {
            const fileName = await UserService.downloadAndCheckImage(data.avatar);
            if (!fileName) {
                const errors = new Map<string, { message: string | undefined }>()
                errors.set('avatar', {'message': `Une erreur est survenue lors de la création d'image`})
                return sendError(event, createError({ statusCode: 400, data: errors }))
            }
            data.avatar = fileName;
        }

        delete data.confirmPassword;
        data.password = await UserService.hashedPassword(data.password);
        data.isVerified = true;
        data.birthDate = new Date(data.birthDate);
        data.lastName = data.lastName.toUpperCase();
        data.firstName = data.firstName.charAt(0).toUpperCase() + data.firstName.slice(1).toLowerCase();

        const user = await createUser(data);

        return {id: user.id};

    } catch (e: any) {
        return await sendDefaultErrorResponse(event, 'oops', 500, e)
    }
});
