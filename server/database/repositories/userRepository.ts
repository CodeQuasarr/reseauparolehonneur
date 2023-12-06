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

export async function getUserById(id: string): Promise<User|null> {
    return prisma.user.findFirst({
        where: {
            id: id
        },
    });
}

export async function getAllUsers(take: number = 0, skip: number = 0, q: string = ''): Promise<IUser[]> {
    return prisma.user.findMany({
        take,
        skip,
        where: {
            OR: [
                {email: {contains: q}},
                {firstName: {contains: q}},
                {lastName: {contains: q}},
            ]
        },
        orderBy: { lastName: 'asc' },
        select: {
            id: true,
            email: true,
            role: true,
            firstName: true,
            lastName: true,
            isVerified: true,
            job: true,
            avatar: true,
        },
    });
}

export async function countUsers(q: string = ''): Promise<number> {
    return prisma.user.count({
        where: {
            OR: [
                {email: {contains: q}},
                {firstName: {contains: q}},
                {lastName: {contains: q}},
            ]
        },
    });
}

export async function updateUser(id: string, data: any): Promise<User> {
    delete data.id
    return prisma.user.update({
        where: {
            id: id
        },
        data
    });
}

export async function deleteUser(id: string) {
    return prisma.user.delete({
        where: {
            id: id
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
