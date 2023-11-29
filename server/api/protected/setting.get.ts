import {prisma} from "~/server/database";
import {H3Event} from "h3";

export default defineEventHandler(async (event: H3Event) => {
    try {
        const userCounts = await prisma.user.count();
        return Promise.resolve({
            statusCode: 201,
            userCounts
        })
    } catch (e: any) {
        return {
            body: JSON.stringify({
                message: e.message,
            }),
        };
    }
});
