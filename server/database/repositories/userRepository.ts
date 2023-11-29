import {User} from "@prisma/client";
import {prisma} from "~/server/database";
import {IUser} from "~/types/IUser";

export async function getUserByEmail(emailOrEmail: string): Promise<User|null> {
    return prisma.user.findFirst({
        where: {
            email: emailOrEmail
        }
    });
}

export async function createUser(data: any): Promise<User> {
    return prisma.user.create({
        data
    });
}

export async function getUserById(id: string): Promise<IUser|null> {
    return prisma.user.findFirst({
        where: {
            id: id
        },
        select: {
            id: true,
            email: true,
            role: true,
        }
    });
}
// export async function getUserByUserName(username: string) {
//     return prisma.user.findUnique({
//         where: {
//             OR:
//                 [
//                     {email: username},
//                     {username: username},
//                 ]
//         }
//     });
// }
