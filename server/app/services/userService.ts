import * as argon2 from "argon2";
import {RegisterRequestType} from "~/server/app/formRequests/ReegisterRequest";
import GlobalService from "~/server/app/services/GlobalService";

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

}

export default UserService
