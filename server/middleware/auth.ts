import SessionService from "~/server/app/services/SessionService";
import {getUserById} from "~/server/database/repositories/userRepository";

import {getSessionByUserId} from "~/server/database/repositories/sessionRepository";

export default defineEventHandler(async (event) => {

    // Get All route starting with /api/dashboard
    const route = event.node.req.url?.startsWith('/api/protected');

    if (!route) return;

    const CookieToken = event.node.req.headers.authorization?.split(' ')[1];

    if (!CookieToken || !CookieToken.trim()) {
        return
    }

    const {token} = SessionService.secureDeserialize(CookieToken.trim(), useRuntimeConfig().sessionKey);
    const decodedToken = SessionService.decodeToken(token);
    const isValidToken = SessionService.verifyToken(decodedToken);

    if (!isValidToken) {
        const session = await getSessionByUserId(decodedToken.userId);

        if (!session) {
            deleteCookie(event, 'user')
            deleteCookie(event, 'authToken')
            // useUserStore().setUserInStore(null);
            // useUserStore().setAuthToken(null);

            // return sendError(event, createError({
            //     statusCode: 401,
            //     statusMessage: "Unauthorized",
            // }));
        }
        // const decodedRefreshToken = SessionService.decodeToken(session.refreshToken);
        // const isValidRefreshToken = SessionService.verifyToken(decodedRefreshToken);
        //
        // if (isValidRefreshToken) {
        //     // const newToken = SessionService.generateToken(decodedToken.userId, useRuntimeConfig().sessionKey);
        //     // const newRefreshToken = SessionService.generateToken(decodedToken.userId, useRuntimeConfig().sessionKey, true);
        //     // await SessionService.updateSession(decodedToken.userId, newToken, newRefreshToken);
        //     // event.node.res.setHeader('Set-Cookie', `token=${newToken}; HttpOnly; Path=/; Max-Age=${useRuntimeConfig().sessionMaxAge}`);
        //     // event.node.res.setHeader('Set-Cookie', `refreshToken=${newRefreshToken}; HttpOnly; Path=/; Max-Age=${useRuntimeConfig().sessionMaxAge}`);
        // } else {
        //     throw new Error('Invalid Token');
        // }
    }

    // return sendError(event, createError({
    //     statusCode: 401,
    //     statusMessage: "Unauthorized",
    // }));

    const user = await getUserById(decodedToken.userId);
    // useUserStore().setUserInStore({id: user?.id, name: `${user?.firstName} ${user?.lastName}`, avatar: user?.avatar});
    //
    event.context.user = user;

})
