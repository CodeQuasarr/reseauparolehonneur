import {RegisterRequestType} from "~/server/app/formRequests/ReegisterRequest";
import {getUserByEmail} from "~/server/database/repositories/userRepository";
import {User} from "@prisma/client";
import * as argon2 from "argon2";

class GlobalService {
    private static instance: GlobalService;

    static async validate(data: RegisterRequestType) {
        const errors = new Map<string, { message: string | undefined }>()

        for (const [key, value] of Object.entries(data)) {
            const password = data.password
            let val: InputValidation = await GlobalService.validateRegistration(key, value, password)
            if (val.hasError) {
                errors.set(key, {'message': val.errorMessage})
            }
        }

        return errors
    }

    static async validateLogin(key: string, value: string): Promise<InputValidation> {
        const check: InputValidation = {
            value: '',
            isBlank: false,
            lenghtMin8: true,
            key: '',
            hasError: false
        }


        // if (!user) {
        //     check.hasError = true
        //     check.errorMessage = `Email or password is incorrect`
        // }
        //
        // if (!user.isVerified) {
        //     check.hasError = true
        //     check.errorMessage = `Please verify your email to login`
        // }
        // const verifiedPassword = await argon2.verify(user.password, data.password);
        // if (!verifiedPassword) {
        //     check.hasError = true
        //     check.errorMessage = `Email or password is incorrect`
        // }

        return check
    }

    static async validateRegistration(key: string, value: string, password: string): Promise<InputValidation> {
        const check: InputValidation = {
            value,
            isBlank: false,
            lenghtMin8: true,
            confirmPassword: true,
            key,
            hasError: false
        }

        if (key == 'password') {
            if (value.length < 8) {
                check.hasError = true
                check.errorMessage = `password must be at least 8 characters`
            }
            check.lenghtMin8 = false
        }

        if (key == 'confirmPassword') {
            if (value.length < 8) {
                check.hasError = true
                check.errorMessage = `password must be at least 8 characters`
            }
            check.lenghtMin8 = false
            if (value !== password) {
                check.hasError = true
                check.errorMessage = `passwords must match`
            }
            check.confirmPassword = false
        }

        if (key == 'email') {
            const email = await getUserByEmail(value)
            if (email) {
                check.emailTaken = true
                check.hasError = true
                check.errorMessage = `Email is invalid or already taken`
            }
        }

        return check
    }
}
export default GlobalService
