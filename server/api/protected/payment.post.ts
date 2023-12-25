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

        const {url, user: customer, shouldUpdateUser} = await StripeService.paymentIntent(lookupKey as string, user);

        console.log("shouldUpdateUser", shouldUpdateUser)
        if (shouldUpdateUser) {
            await updateStripeCustomerId(customer);
        }

        console.log("zzzzzzzzzzzzzzzzzzzzz", lookupKey)
        console.log('url', url)

        return {url}

    } catch (e: any) {

    }
});
