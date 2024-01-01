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

        let successUrl: string = `${useRuntimeConfig().public.baseUrl}/subscribe/success?session_id={CHECKOUT_SESSION_ID}`;

        if (data.mode === 'payment') {
            successUrl = `${useRuntimeConfig().public.baseUrl}/subscribe/success?session_id={CHECKOUT_SESSION_ID}&eventId=${data.eventId}`;
        }

        const {url, user: customer, shouldUpdateUser} = await StripeService.getPaymentUrl(lookupKey as string, user, data.mode, successUrl);


        if (shouldUpdateUser) {
            await updateStripeCustomerId(customer);
        }
        return {url}

    } catch (e: any) {

    }
});
