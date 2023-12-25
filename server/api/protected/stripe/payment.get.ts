
import Stripe from 'stripe';
import HelperService from "~/server/app/services/HelperService";

const config = useRuntimeConfig()
const stripe = new Stripe(config.stripe.secretKey, {
    apiVersion: '2023-10-16',
});

export default defineEventHandler(async (event) => {
    try {
        const user= event.context.user;
        // Remplacez la logique ci-dessous par la récupération réelle des paiements de l'utilisateur
        const payments = await stripe.paymentIntents.list({
            customer: user.stripeCustomerId,
        });

        const formattedPayments = payments.data.map((payment) => ({
            id: payment.id,
            amount: `${payment.amount / 100} ${payment.currency}`,
            startDate: HelperService.convertNumberToHours(payment.created),
            status: payment.status,
        }));
        console.log('Paiements récupérés :', payments.data);

        return formattedPayments;
    } catch (error) {
        console.error('Erreur lors de la récupération des paiements :', error);
        throw error;
    }
});
