import {User} from "@prisma/client";
import {prisma} from "~/server/database";

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
