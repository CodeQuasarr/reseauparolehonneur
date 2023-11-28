import * as argon2 from "argon2";
import {RegisterRequestType} from "~/server/app/formRequests/ReegisterRequest";
import GlobalService from "~/server/app/services/GlobalService";
import {User} from "@prisma/client";

class UserService {
    public static async hashedPassword(newPassword: string ): Promise<string> {
        return await argon2.hash(newPassword);
    }

    static validatePassword(value: any): boolean {
        return true;
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



}

export default UserService
