import Stripe from 'stripe';
import {getEventById} from "~/server/database/repositories/eventRepository";
import {prisma} from "~/server/database";

const config = useRuntimeConfig()
const stripe = new Stripe(config.stripe.secretKey, {
    apiVersion: '2023-10-16',
});

export default defineEventHandler(async (event) => {
    // const data = await readBody(event)
    const session_id = String(getQuery(event).sessionId);
    const eventId = String(getQuery(event).eventId)

    console.log('session_id', session_id)
    console.log('eventId', eventId)

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

        console.log('Last purchase:', payment);
        console.log('Price:', price);
        console.log('Date:', date.toISOString());
    } else {
        console.log('No purchases found.');
    }

    return {
        message: 'ok; payment success',
    }

});
