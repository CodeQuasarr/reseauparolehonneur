import {Evenement, User} from "@prisma/client";
import {prisma} from "~/server/database";

export async function getUserByEmail(emailOrEmail: string): Promise<User | null> {
    return prisma.user.findFirst({
        where: {
            email: emailOrEmail
        }
    });
}

export async function createEvent(data: any): Promise<Evenement> {
    return prisma.evenement.create({
        data
    });
}

export async function getEventById(id: string) {
    return prisma.evenement.findFirst({
        where: {
            id: id
        },
        select: {
            id: true,
            title: true,
            picture: true,
            startDate: true,
            startTime: true,
            address: true,
            content: true,
            users: true,
        }
    });
}

export async function getAllEvents(take: number = 0, skip: number = 0, q: string = ''): Promise<Evenement[]> {

    const whereClause: any = {
        OR: [
            {title: {contains: q}},
        ],
    };

    return prisma.evenement.findMany({
        take,
        skip,
        where: whereClause,
        orderBy: {id: 'desc'},
    });
}

export async function getFirstEventByStartDate(today: Date) {
    return prisma.evenement.findFirst({
        where: {
            startDate: {
                gt: new Date().toISOString()
            }
        },
        orderBy: {
            startDate: 'asc'
        },
        select: {
            id: true,
            title: true,
            startDate: true,
            startTime: true,
            address: true,
            content: true,
            users: true,
        }
    });
}

export async function countEvents(q: string = ''): Promise<number> {
    return prisma.evenement.count({
        where: {
            OR: [
                {title: {contains: q}},
            ]
        },
    });
}

export async function updateEvent(id: string, data: any): Promise<Evenement> {
    delete data.id
    console.log(id, data)
    return prisma.evenement.update({
        where: {
            id: id
        },
        data: {
            title: data.title,
            content: data.content,
            picture: data.picture,
            startDate: data.startDate,
            startTime: data.startTime,
            address: data.address,
            users: data.users
        }
    });
}

export async function deleteEvent(id: string) {
    return prisma.evenement.delete({
        where: {
            id: id
        }
    });
}

export async function getSpeakersForEvent(id: string) {
    return prisma.evenement.findFirst({
        where: {
            id: id
        },
        select: {
            users: true
        }
    });
}


