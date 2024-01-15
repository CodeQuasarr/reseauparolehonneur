import validateRegisterRequest from "~/server/app/formRequests/ReegisterRequest";
import UserService from "~/server/app/services/userService";
import {createUser} from "~/server/database/repositories/userRepository";
import {sendZodErrorResponse, sendDefaultErrorResponse} from "~/server/app/errors";
import {ZodError} from "zod";
import {User} from "@prisma/client";
import TokenService from "~/server/app/services/TokenService";
import EmailService from "~/server/app/services/emailService";
import {createVerifyEmailData} from "~/server/database/repositories/emailRepository";

export default defineEventHandler(async event => {
    try {

        let data = await validateRegisterRequest(event);
        const validation = await UserService.validateUser(data);

        if (validation.hasErrors && validation.errors) {
            const errors = JSON.stringify(Object.fromEntries(validation.errors))
            return sendError(event, createError({ statusCode: 422, data: errors }))
        }
        // @ts-ignore
        delete data.confirmPassword
        data.password = await UserService.hashedPassword(data.password);
        data.lastName = data.lastName.toUpperCase();
        data.firstName = data.firstName.charAt(0).toUpperCase() + data.firstName.slice(1).toLowerCase();
        data.avatar = 'default.png';

        const user: User = await createUser(data);

        await EmailService.sendVerificationEmail(user);

        return Promise.resolve({
            statusCode: 201,
            statusMessage: 'Le compte a bien été créer', // Vous pouvez personnaliser le message si nécessaire
        })

    } catch (e: any) {
        if (e.data instanceof ZodError) {
            return await sendZodErrorResponse(event, e.data)
        }
        return await sendDefaultErrorResponse(event, 'oops', 500, e)
    }
});
