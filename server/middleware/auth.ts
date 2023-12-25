import SessionService from "~/server/app/services/SessionService";
import {getUserById} from "~/server/database/repositories/userRepository";


export default defineEventHandler(async (event) => {

    // Get All route starting with /api/dashboard
    const route = event.node.req.url?.startsWith('/api/protected');
    // console.log('route', event.node.req.url)

    if (!route) return;

    // get cookie
    const cookieToken = getCookie(event, 'authToken');
    // console.log('cookieToken', cookieToken)
    if (!cookieToken) {
        deleteCookie(event, 'authToken');
        deleteCookie(event, 'user');
        // unauthorize
        return sendError(event, createError({statusCode: 401, statusMessage: 'Unauthorized', message: 'login'}))
    }
    //
    const token = JSON.parse(cookieToken);
    const decodedToken = SessionService.decodeToken(token.authToken);

    const isValidToken = SessionService.verifyToken(decodedToken);
    if (!isValidToken) {

        deleteCookie(event, 'authToken');
        deleteCookie(event, 'user');
        console.log('no cookie')
        // unauthorize
        // return sendError(event, createError({statusCode: 401, statusMessage: 'Unauthorized', message: 'login'}))
    }

    // get user
    const user = await getUserById(decodedToken.userId);
    event.context.user = user;

})
