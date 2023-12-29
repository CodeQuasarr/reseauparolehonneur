import {Role, User} from "@prisma/client";
import {prisma} from "~/server/database";
import {IUser} from "~/types/IUser";
import {Filter} from "~/types/Filter";

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

export async function getAllUsers(take: number = 0, skip: number = 0, q: string = '', status: string | null, role: null | string): Promise<IUser[]> {

    const whereClause: any = {
        OR: [
            { email: { contains: q } },
            { firstName: { contains: q } },
            { lastName: { contains: q } },
        ],
    };

    if (role && role.trim() !== '') {

        whereClause['role'] = Role[role.toUpperCase() as keyof typeof Role];
    }
    if (status && status.trim() !== '') {
        whereClause['isVerified'] = status === 'active';
    }

    return prisma.user.findMany({
        take,
        skip,
        where: whereClause,
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

export async function updateStripeCustomerId(data: IUser) {
    return prisma.user.update({
        where: {
            id: data.id,
        },
        data: {
            stripeCustomerId: data.stripeCustomerId,
        },
    });
}

export async function getSubscriptionById(id: string) {
    return prisma.subscription.findUnique({
        where: {
            userId: id,
        },
    });
}

export async function getAllSpeackers(): Promise<IUser[] | null> {
    return prisma.user.findMany({
        where: {
            role: Role.SPEAKER,
        },
        select: {
            id: true,
            firstName: true,
            lastName: true,
            avatar: true,
        },
    });
}

