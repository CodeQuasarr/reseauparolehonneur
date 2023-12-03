import SessionService from "~/server/app/services/SessionService";
import {getUserById} from "~/server/database/repositories/userRepository";


export default defineEventHandler(async (event) => {

    // Get All route starting with /api/setting
    const route = event.node.req.url?.startsWith('/api/protected');

    if (!route) return;

    const CookieToken = event.node.req.headers.authorization?.split(' ')[1];

    if (!CookieToken || !CookieToken.trim()) {
        return
    }

    const {token} = SessionService.secureDeserialize(CookieToken.trim(), useRuntimeConfig().sessionKey);
    const decodedToken = SessionService.decodeToken(token);
    const isValidToken = SessionService.verifyToken(decodedToken);

    const user = await getUserById(decodedToken.userId);

    event.context.user = user;

})
