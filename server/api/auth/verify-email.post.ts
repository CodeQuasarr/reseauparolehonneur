import TokenService from "~/server/app/services/TokenService";
import {getUserById, updateUserField} from "~/server/database/repositories/userRepository";
import {deleteEmail, getVerifyEmailData} from "~/server/database/repositories/emailRepository";
import EmailService from "~/server/app/services/emailService";

export default defineEventHandler(async event => {
    try {
        const data = await readBody(event)
        console.log('token', data)

        if (!data.token) {
            return sendError(event, createError({
                statusCode: 403,
                statusMessage: "Un problème est survenu. Veuillez contacter le support technique",
            }));
        }

        const email = await getVerifyEmailData(data.token);
        if (!email) {
            return sendError(event, createError({
                statusCode: 403,
                statusMessage: "Ce lien de vérification n'est plus valide. Veuillez contacter le support technique",
            }));
        }

        const decodeToken = TokenService.decodeToken(data.token);
        if (!decodeToken) {
            return sendError(event, createError({
                statusCode: 403,
                statusMessage: "Un problème est survenu. Veuillez contacter le support technique",
            }));
        }

        const user = await getUserById(decodeToken.userId)
        if (!user) {
            return sendError(event, createError({
                statusCode: 403,
                statusMessage: "Un problème est survenu. Veuillez contacter le support technique",
            }));
        }

        const isValidToken = TokenService.verifyToken(decodeToken);
        if (!isValidToken) {
            // Create email verification token
            await deleteEmail(data.token, 'VERIFICATION_EMAIL')
            await EmailService.sendVerificationEmail(user);
            return Promise.resolve({
                statusCode: 403,
                statusMessage: 'Le lien de verification a expiré; Un nouveau lien vous a été envoyé par email.', // Vous pouvez personnaliser le message si nécessaire
            })
        }

        await updateUserField(decodeToken.userId, 'isVerified', true);
        await deleteEmail(data.token, 'VERIFICATION_EMAIL')

        return {
            statusCode: 200,
            statusMessage: "Votre email a été vérifié avec succès; vous pouvez désormais vous connecter à votre compte",
        }
    } catch (e: any) {
        return sendError(event, createError({
            statusCode: 500,
            statusMessage: e.message,
        }));
    }

});
