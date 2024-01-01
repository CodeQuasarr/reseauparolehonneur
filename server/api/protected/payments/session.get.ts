import Stripe from 'stripe';
import {getEventById} from "~/server/database/repositories/eventRepository";
import {prisma} from "~/server/database";

const config = useRuntimeConfig()
const stripe = new Stripe(config.stripe.secretKey, {
    apiVersion: '2023-10-16',
});

export default defineEventHandler(async (event) => {
    // const data = await readBody(event)
    const sessionId = String(getQuery(event).sessionId);
    const eventId = String(getQuery(event).eventId)


    if (eventId) {
        const user= event.context.user;
        // Remplacez la logique ci-dessous par la récupération réelle des paiements de l'utilisateur
        const payments = await stripe.paymentIntents.list({
            customer: user.stripeCustomerId,
            limit: 1,
        });

        if (payments.data.length > 0) {
            const lastPayment = payments.data[0];
            const price = lastPayment.amount_received / 100; // Adjust this property according to your needs
            const date = new Date(lastPayment.created * 1000);
            const status = lastPayment.status;

            const evenement = await getEventById(eventId);

            if (!evenement) {
                throw new Error('Evenement not found');
            }

            const payment = await prisma.payment.create({
                data: {
                    userId: user.id,
                    eventId: eventId,
                    amount: price,
                    status: 'success',
                    event: {
                        title: evenement.title,
                        startDate: evenement.startDate,
                        startTime: evenement.startTime,
                        address: evenement.address,
                    },
                    startDate: date
                }
            });

        } else {
            console.log('No purchases found.');
        }

        return {
            message: 'ok; payment success',
        }
    }

    if ( sessionId ) {
        const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);
        const subscription = await stripe.subscriptions.retrieve(checkoutSession.subscription as string);


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

        return {
            message: 'ok; payment success',
        }
    }

    return sendError(event, createError({statusCode: 400, message: 'Bad request'}));

});
