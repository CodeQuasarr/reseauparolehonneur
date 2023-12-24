import validateLoginRequest from "~/server/app/formRequests/LoginRequest";
import {H3Event} from "h3";
import UserService from "~/server/app/services/userService";
import {getUserByEmail} from "~/server/database/repositories/userRepository";
import {User} from "@prisma/client";
import SessionService from "~/server/app/services/SessionService";

export default eventHandler(async (event: H3Event) => {
    try {
        const data = await validateLoginRequest(event);

        const userInfo: User | null = await getUserByEmail(data.email);
        const validation = await UserService.validateUserLogin(userInfo, data.password);

        if (validation.hasErrors && validation.errors) {
            const errors = JSON.stringify(Object.fromEntries(validation.errors))
            return sendError(event, createError({ statusCode: 401, data: errors }))
        }
        const config = useRuntimeConfig();
        const authToken = SessionService.generateToken({userId: userInfo?.id}, (60 * 5)); // 5 minutes
        const refreshToken = SessionService.generateToken({userId: userInfo?.id}, 2592000); // 30 days
        const session = await SessionService.setSession(userInfo?.id as string, refreshToken);

        const {user, accessToken} = await SessionService.makeSessionCookie(event, authToken);


        return {
            user: user,
            accessToken
        }

    } catch (e: any) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: e.message,
            }),
        };

    }
});
