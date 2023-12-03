import * as argon2 from "argon2";
import {RegisterRequestType} from "~/server/app/formRequests/ReegisterRequest";
import GlobalService from "~/server/app/services/GlobalService";
import {User} from "@prisma/client";
import {validateEmail, validatePassword} from "~/utils/config/formValidationsRules";
import path from "path";
import fs from "fs";

class UserService {

    public static fields: string[] = [
        'role', 'email', 'firstName', 'lastName', 'password', 'isVerified', 'isBanned', 'birthDate',
        'job', 'description', 'address', 'city', 'country', 'phone', 'avatar', 'language_1', 'language_2',
    ];

    public static async hashedPassword(newPassword: string): Promise<string> {
        return await argon2.hash(newPassword);
    }

    static passwordMatch(password: string, confirmed: string): boolean {
        return password === confirmed;
    }

    static async validateUser(data: RegisterRequestType) {

        const errors = await GlobalService.validate(data)

        if (errors.size > 0) {
            return {hasErrors: true, errors}
        }

        return {hasErrors: false}
    }

    static async validateUserLogin(user: User | null, password: string) {

        const errors = new Map<string, { message: string | undefined }>()
        if (!user) {
            errors.set('email', {'message': `Email or password is incorrect`})

        } else {
            if (user && !user.isVerified) {
                errors.set('email', {'message': `Please verify your email to login`})

            }
            const verifiedPassword = await argon2.verify(user.password, password);
            if (!verifiedPassword) {
                errors.set('email', {'message': `Email or password is incorrect`})

            }
        }

        return errors.size ? {hasErrors: true, errors} : {hasErrors: false};
    }

    static async removeConfirmedPassword(data: any): Promise<any> {
        delete data.confirmPassword;
        return data;
    }

    static async validationUserDataFields(data: any, forCreation: boolean = true): Promise<any> {
        const errors = new Map<string, { message: string | undefined }>()

        if (!data) {
            errors.set('user', {'message': `Tous les champs sont obligatoires`})
        } else {
            for (const key of this.fields) {
                if (forCreation) {
                    if (key === 'email' || key === 'password' || key === 'firstName' || key === 'lastName' || key === 'role') {
                        if (!data[key]) {
                            errors.set(key, {'message': `Le champ ${key} est obligatoire`})
                        }
                    }
                }
                if (data[key]) {
                    if (key === 'role') {
                        if (data[key] !== 'USER' && data[key] !== 'ADMIN' && data[key] !== 'REDACTOR') {
                            errors.set(key, {'message': 'le rôle Que vous avez choisi n\'est pas valide'})
                        }
                    }
                    if (key === 'email') {
                        if (!validateEmail(data[key])) {
                            errors.set(key, {'message': 'L\'email n\'est pas valide'})
                        }
                    }
                    if (key === 'firstName' || key === 'lastName') {
                        if (data[key].length < 3) {
                            errors.set(key, {'message': 'le nom et le prénom doit contenir au moins 3 caractères'})
                        }
                    }
                    if (key === 'password') {
                        if (!validatePassword(data[key])) {
                            errors.set(key, {'message': 'Le mot de passe doit contenir au moins 8 caractères, une lettre, un chiffre et un caractère spécial'})
                        }
                        if (!this.passwordMatch(data[key], data.confirmPassword)) {
                            errors.set(key, {'message': 'Le mot de passe et la confirmation du mot de passe ne correspondent pas'})
                        }
                    }
                }
            }
        }


        return errors.size ? {hasErrors: true, errors} : {hasErrors: false};
    }

    public static async downloadAndCheckImage(picture: string): Promise<string> {
        const extension = picture.split(';')[0].split('/')[1];
        const pictureName = Math.floor(Math.random() * 1000000).toString();
        const fileName = `${pictureName}.${extension}`;

        // Download the picture from the URL.
        const pictureUrl = await fetch(picture);
        const imageData = await pictureUrl.arrayBuffer();
        const buffer = Buffer.from(imageData);

        if (!buffer.byteLength) {
            throw new Error('Image size is too large');
        }

        const destPath = path.join(process.cwd(), 'assets', 'images/users', fileName);
        // Save the image to the file system.
        fs.writeFileSync(destPath, buffer);

        return fileName;
    }

    public static async replaceImage(oldFileName: string, newPicture: string): Promise<string> {
        // Supprimer l'ancienne image
        const oldImagePath = path.join(process.cwd(), 'assets', 'images/users', oldFileName);
        fs.unlinkSync(oldImagePath);

        // Enregistrer la nouvelle image
        const extension = newPicture.split(';')[0].split('/')[1];
        const pictureName = Math.floor(Math.random() * 1000000).toString();
        const fileName = `${pictureName}.${extension}`;

        // Télécharger la nouvelle image depuis l'URL
        const pictureUrl = await fetch(newPicture);
        const imageData = await pictureUrl.arrayBuffer();
        const buffer = Buffer.from(imageData);

        if (!buffer.byteLength) {
            throw new Error('La taille de l\'image est trop grande');
        }

        const destPath = path.join(process.cwd(), 'assets', 'images/users', fileName);
        // Enregistrer la nouvelle image sur le système de fichiers
        fs.writeFileSync(destPath, buffer);

        return fileName;
    }

    public static sanitizeUserForFrontend(user: any | undefined): User | undefined {
        if (!user) {
            return user;
        }
        delete user.password;

        return user as User
    }

}

export default UserService
