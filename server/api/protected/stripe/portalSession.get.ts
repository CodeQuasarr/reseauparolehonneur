import Stripe from 'stripe';
import {prisma} from "~/server/database";

const config = useRuntimeConfig()
const stripe = new Stripe(config.stripe.secretKey, {
    apiVersion: '2023-10-16',
});

export default defineEventHandler(async (event) => {

    const session_id = String(getQuery(event).sessionId);

    const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);
    const subscription = await stripe.subscriptions.retrieve(checkoutSession.subscription as string);

    console.log('subscription', subscription)



    await prisma.subscription.upsert({
        where: {stripeId: subscription.id},
        update: {
            stripeStatus: subscription.status,
            stripePriceId: subscription.items.data[0].price.id,
            quantity: 1,
            trialEndsAt: subscription.trial_end,
            endsAt: subscription.ended_at,
            lastEventDate: subscription.current_period_end,
            startDate: subscription.start_date
        },
        create: {
            userId: event.context.user.id,
            stripeId: subscription.id,
            stripeStatus: subscription.status,
            stripePriceId: subscription.items.data[0].price.id,
            quantity: 1,
            trialEndsAt: subscription.trial_end,
            endsAt: subscription.ended_at,
            lastEventDate: subscription.current_period_end,
            startDate: subscription.current_period_start
        }
    })

    console.log('subscription.id', subscription)


});
