import Stripe from 'stripe';
import {getEventById} from "~/server/database/repositories/eventRepository";
import {prisma} from "~/server/database";

const config = useRuntimeConfig()
const stripe = new Stripe(config.stripe.secretKey, {
    apiVersion: '2023-10-16',
});

export default defineEventHandler(async (event) => {

    const user= event.context.user;

    const payments = await prisma.payment.findMany({
        where: {
            userId: user.id
        }
    });

    return payments;
});
