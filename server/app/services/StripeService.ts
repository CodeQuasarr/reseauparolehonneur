import Stripe from 'stripe';
import {IUser} from "~/types/IUser";

const config = useRuntimeConfig()
const stripe = new Stripe(config.stripe.secretKey, {
    apiVersion: '2023-10-16',
});

class StripeService {

    public static getLookupKey(paymentKey: number): string | boolean {
        switch (paymentKey) {
            case 1:
                return useRuntimeConfig().stripePaymentSubscriber as string;
            case 2:
                return useRuntimeConfig().stripePaymentSubscriberReduction as string;
            case 3:
                return useRuntimeConfig().stripePaymentBasic as string;
            case 4:
                return useRuntimeConfig().stripePaymentDuo as string;
        }
        return false;
    }

    public static async getSubscribeUrl(lookupKey: string, user: IUser) {

        const customerEmail = user.email;

        const price = await stripe.prices.retrieve(
            lookupKey
        );
        let shouldUpdateUser = false;

        if (!user.stripeCustomerId) {
            const customer = await stripe.customers.create({
                email: customerEmail,
                // name: user.lastName + ' ' + user.firstName,

            });
            user.stripeCustomerId = customer.id;
            shouldUpdateUser = true;
        }


        const session = await stripe.checkout.sessions.create({
            billing_address_collection: 'auto',
            line_items: [
                {
                    price: price.id,
                    quantity: 1,

                },
            ],
            mode: 'subscription',
            success_url: `${useRuntimeConfig().public.baseUrl}/subscribe/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${useRuntimeConfig().public.baseUrl}/subscribe/cancel`,
            customer: user.stripeCustomerId
        });



        return {url: session.url, user, shouldUpdateUser}
    }

}
export default StripeService
