import {prisma} from "~/server/database";
import {H3Event} from "h3";
import {getSubscriptionById} from "~/server/database/repositories/userRepository";

export default defineEventHandler(async (event: H3Event) => {
    try {

        const subscriber = await getSubscriptionById(event.context.user.id);
        console.log('subscriber', subscriber)
        const date = new Date(subscriber.startDate * 1000);
        console.log(date.toUTCString())
    } catch (e: any) {
        return {
            body: JSON.stringify({
                message: e.message,
            }),
        };
    }
});
