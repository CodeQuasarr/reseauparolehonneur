import Stripe from 'stripe';

const config = useRuntimeConfig()
const stripe = new Stripe(config.stripe.secretKey, {
    apiVersion: '2023-10-16',
});

export default defineEventHandler(async (event) => {
    // get stripe session
    const data = await readBody(event)
    const session_id = data.session_id
    const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);
    const subscription = await stripe.subscriptions.retrieve(checkoutSession.subscription as string);

});
