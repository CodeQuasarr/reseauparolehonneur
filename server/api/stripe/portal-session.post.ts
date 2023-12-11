import Stripe from 'stripe';

const config = useRuntimeConfig()
const stripe = new Stripe(config.stripe.secretKey, {
    apiVersion: '2023-10-16',
});

export default defineEventHandler(async (event) => {
    const data = await readBody(event)
    const session_id = data.session_id
    const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);
    const portalSession = await stripe.billingPortal.sessions.create({
        customer: checkoutSession.customer as string,
        return_url: config.baseUrl,
    });

    await sendRedirect(event, portalSession.url)
});
