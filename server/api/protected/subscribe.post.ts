import StripeService from "~/server/app/services/StripeService";
import {updateStripeCustomerId} from "~/server/database/repositories/userRepository";


export default defineEventHandler(async event => {
    try {
        const data = await readBody(event);

        const lookupKey = StripeService.getLookupKey(Number(data.paymentKey));


        const user = event.context.user;

        if (!user) {
            throw new Error('User not found');
        }

        const {url, user: customer, shouldUpdateUser} = await StripeService.getSubscribeUrl(lookupKey as string, user);

        if (shouldUpdateUser) {
            await updateStripeCustomerId(customer);
        }

        return {url}

    } catch (e: any) {

    }
});
