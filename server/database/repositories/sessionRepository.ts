import {Role, User} from "@prisma/client";
import {prisma} from "~/server/database";
import {IUser} from "~/types/IUser";
import {Filter} from "~/types/Filter";

export const getSessionByUserId = async (userId: string) => {
    return prisma.session.findFirst({
        where: {
            userId
        }
    })
}
