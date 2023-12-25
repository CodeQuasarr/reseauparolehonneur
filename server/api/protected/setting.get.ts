import {H3Event} from "h3";
import {getSubscriptionById} from "~/server/database/repositories/userRepository";
import HelperService from "~/server/app/services/HelperService";


export default defineEventHandler(async (event: H3Event) => {
    try {

        const subscriber = await getSubscriptionById(event.context.user.id);

        if (!subscriber) {
            return {
                subscriptionRenewal: null
            };
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
