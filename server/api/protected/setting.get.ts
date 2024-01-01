import {H3Event} from "h3";
import {getSubscriptionById} from "~/server/database/repositories/userRepository";
import HelperService from "~/server/app/services/HelperService";


export default defineEventHandler(async (event: H3Event) => {
    try {

        const subscriber = await getSubscriptionById(event.context.user.id);

        const user = event.context.user;
        if (!subscriber) {
            return {
                userId: user.id,
                subscriptionRenewal: null
            };
        }
        //
        // console.log('event.context.user', event.context.user)
        // console.log('HelperService.convertNumberToHour', HelperService.convertNumberToHours(subscriber.lastEventDate))
        return {
            userId: user.id,
            subscriptionRenewal: HelperService.convertNumberToHours(subscriber.lastEventDate),

        }
    } catch (e: any) {
        return {
            body: JSON.stringify({
                message: e.message,
            }),
        };
    }
});
