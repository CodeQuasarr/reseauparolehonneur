import Stripe from 'stripe';
import {getEventById} from "~/server/database/repositories/eventRepository";

const config = useRuntimeConfig()
const stripe = new Stripe(config.stripe.secretKey, {
    apiVersion: '2023-10-16',
});

export default defineEventHandler(async (event) => {
    // const data = await readBody(event)
    const session_id = String(getQuery(event).sessionId);
    const eventId = String(getQuery(event).envetnId)
    console.log('session_id', session_id)
    console.log('eventId', eventId)
    return;
    const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);
    const portalSession = await stripe.billingPortal.sessions.create({
        customer: checkoutSession.customer as string,
        return_url: config.baseUrl,
    });


    const evenement = await getEventById(eventId)

    if (!evenement) {
        throw new Error('Evenement not found');
    }

    // await prisma.payment.create({
    //     data: {
    //         userId: event.context.user.id,
    //         amount: 30,
    //         status: 'true',
    //         event: {
    //             title: evenement.title,
    //         },
    //         type: 'subscription'
    //     }
    // });

});
