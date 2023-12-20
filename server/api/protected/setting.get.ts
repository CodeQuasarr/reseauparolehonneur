import {H3Event} from "h3";
import {getSubscriptionById} from "~/server/database/repositories/userRepository";
import HelperService from "~/server/app/services/HelperService";


export default defineEventHandler(async (event: H3Event) => {
    try {

        const subscriber = await getSubscriptionById(event.context.user.id);

        if (!subscriber) {
            return sendError(event, createError({
                message: 'No subscription found',
                statusCode: 404
            }))
        }


        console.log('subscriber', HelperService.convertNumberToHours(subscriber.lastEventDate))
        return {
            subscriptionRenewal: HelperService.convertNumberToHours(subscriber.lastEventDate)
        }
    } catch (e: any) {
        return {
            body: JSON.stringify({
                message: e.message,
            }),
        };
    }
});
