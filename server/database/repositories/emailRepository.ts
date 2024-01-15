import {prisma} from "~/server/database";
import EmailService from "~/server/app/services/emailService";

export const createVerifyEmailData = async (email: string, token: string) => {
    return prisma.mail.create({
        data: {
            email: email,
            token: token,
            type: 'VERIFICATION_EMAIL'
        }
    });
}

export const getVerifyEmailData = async (token: string) => {
    return prisma.mail.findFirst({
        where: {
            token,
            type: 'VERIFICATION_EMAIL'
        }
    })
}

export const createSurveyEmailData = async (email: string, token: string) => {
    return prisma.mail.create({
        data: {
            email: email,
            token: token,
            type: 'SURVEY_EMAIL'
        }
    });
}

export const deleteEmail = async (token: string, type: string) => {
    return prisma.mail.deleteMany({
        where: {
            type,
            token
        }
    })
}
