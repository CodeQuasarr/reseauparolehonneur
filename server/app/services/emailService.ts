import * as nodemailer from "nodemailer";
import verifyEmailTemplate from "~/mails/templates/verifyEmailTemplate";
import surveyEmailTemplate from "~/mails/templates/sondageTemplate";
import resetPasswordTemplate from "~/mails/templates/resetPasswordTemplate";
import TokenService from "~/server/app/services/TokenService";
import {createVerifyEmailData} from "~/server/database/repositories/emailRepository";

const transport = nodemailer.createTransport({
    // @ts-ignore
    service: "gmail",
    host: useRuntimeConfig().mail.host,
    port: useRuntimeConfig().mail.port,
    auth: {
        user: useRuntimeConfig().mail.auth.user,
        pass: useRuntimeConfig().mail.auth.pass
    }
});
class EmailService {


    public static async sendVerificationEmail(user: any) {
        // Create email verification token
        const token: string = TokenService.generateToken({userId: user.id}, 300) // 5 minutes
        const url: string = `${useRuntimeConfig().baseUrl}/verify-email?token=${token}`;
        const mail = await this.sendVerificationEmailInternal(user.email, url, user.firstName);

        await createVerifyEmailData(user.email, token);
    }

    public static async sendVerificationEmailInternal(email: string, url: string, firstName: string) {
        try {
            const mail = await transport.sendMail({
                from: useRuntimeConfig().mail.auth.user,
                to: email,
                subject: 'Vérification de votre adresse email Réseau Parole d\'Honneur',
                text: verifyEmailTemplate(firstName, url),
                html: verifyEmailTemplate(firstName, url)
            });

            console.log("Message sent: %s", mail.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(mail));
            return mail;
        } catch (e: any) {
            console.error(e);
        }
    }

    public static async sendSurveyEmail(email: string, url: string) {
        try {
            const mail = await transport.sendMail({
                from: useRuntimeConfig().mail.auth.user,
                to: email,
                subject: 'Merci pour votre participation au dernier cocktail business Réseau PH',
                text: surveyEmailTemplate(url),
                html: surveyEmailTemplate(url),
            });

            console.log("Message sent: %s", mail.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(mail));
            return mail;
        } catch (e: any) {
            console.error(e);
        }
    }

    public static async sendResetPasswordEmail(email: string, url: string, firstName: string) {
        try {
            const mail = await transport.sendMail({
                from: useRuntimeConfig().mail.auth.user,
                to: email,
                subject: 'Réinitialiser votre mot de passe',
                text: resetPasswordTemplate(firstName, url),
                html: resetPasswordTemplate(firstName, url)
            });

            console.log("Message sent: %s", mail.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(mail));
            return mail;
        } catch (e: any) {
            console.error(e);
        }
    }
}

export default EmailService;
