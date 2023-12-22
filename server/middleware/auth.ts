import SessionService from "~/server/app/services/SessionService";


export default defineEventHandler(async (event) => {

    // Get All route starting with /api/dashboard
    const route = event.node.req.url?.startsWith('/private/app');
    console.log('route', route)

    if (!route) return;

    // get cookie
    const cookieToken = getCookie(event, 'authToken');
    if (!cookieToken) { return await sendRedirect(event, '/login') }

    const {token} = SessionService.secureDeserialize(cookieToken.trim(), useRuntimeConfig().sessionKey);
    const decodedToken = SessionService.decodeToken(token);
    const isValidToken = SessionService.verifyToken(decodedToken);
    console.log('cookies', isValidToken)
    if (!isValidToken) {
        deleteCookie(event, 'authToken');
        deleteCookie(event, 'user');

        return await sendRedirect(event, '/login')
    }

})
