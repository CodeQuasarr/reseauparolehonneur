import {prisma} from "~/server/database";
import {H3Event} from "h3";

export default defineEventHandler(async (event: H3Event) => {
    try {


        const userCounts = await prisma.user.count();
        const eventCounts = await prisma.evenement.count();
        return {
            userCounts,
            eventCounts,
        }
    } catch (e: any) {
        return {
            body: JSON.stringify({
                message: e.message,
            }),
        };
    }
});
