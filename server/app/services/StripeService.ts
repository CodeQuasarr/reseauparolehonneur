import Stripe from 'stripe';
import {IUser} from "~/types/IUser";
import type {SubscribePostResponse} from "~/types/SubscribePostResponse";

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

    public static async getPaymentUrl(lookupKey: string, user: IUser, mode: "subscription"|"payment", successUrl: string): Promise<SubscribePostResponse> {

        const customerEmail = user.email;


        const price = await stripe.prices.retrieve(
            lookupKey
        );
        let shouldUpdateUser = false;

        if (!user.stripeCustomerId) {
            const customer = await stripe.customers.create({
                email: customerEmail,
                name: `${user.firstName} ${user.lastName}`,

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
            mode: mode,
            success_url: successUrl,
            cancel_url: `${useRuntimeConfig().public.baseUrl}/subscribe/cancel`,
            customer: user.stripeCustomerId
        });

        if (!session.url) {
            throw new Error('No url in session');
        }


        return {url: session.url, user, shouldUpdateUser}
    }

}

export default StripeService
