
import {H3Event} from "h3";
import SessionService from "~/server/app/services/SessionService";

export default eventHandler(async (event: H3Event) => {
    // get cookie
    const cookieToken = getCookie(event, 'authToken');
    // console.log('cookieToken', cookieToken)
    if (!cookieToken) {
        return false
    }
    //
    const token = JSON.parse(cookieToken);
    const decodedToken = SessionService.decodeToken(token.authToken);

    const isValidToken = SessionService.verifyToken(decodedToken);
    if (!isValidToken) {

        return false
    }
    return true
});
