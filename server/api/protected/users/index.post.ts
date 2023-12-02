import UserService from "~/server/app/services/userService";
import {createUser} from "~/server/database/repositories/userRepository";

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
                return sendError(event, createError({ statusCode: 400, data: [{'avatar': {'message' : 'Une erreur est survenue lors de la création d\'image'} }] }))
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
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: e.message,
        }));
    }
});
