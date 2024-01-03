import {sendDefaultErrorResponse} from "~/server/app/errors";
import {getPaymentsByEventId} from "~/server/database/repositories/eventRepository";
import {getUserById} from "~/server/database/repositories/userRepository";

export default defineEventHandler(async (event) => {
    try {
        const id = String(event.context.params?.id);
        const payments = await getPaymentsByEventId(id);

        const allPayments = await Promise.all(payments.map(async (payment) => {
            const user = await getUserById(payment.userId);
            return {
                id: payment.id,
                userName: `${user?.lastName} ${user?.firstName}`,
                userAvatar: user?.avatar,
                event: payment?.event,
                amount: payment.amount,
                status: payment.status,
                startDate: payment.startDate,
            };
        }));
        return allPayments;
    } catch (e: any) {
        return await sendDefaultErrorResponse(event, 'oops', 500, e)
    }
});
