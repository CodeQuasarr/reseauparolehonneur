import jwt from "jsonwebtoken";

class TokenService {

    static generateToken(user: any, expiresIn: number): string {

        const payload = {
            ...user,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + expiresIn,
        }
        return jwt.sign(payload, useRuntimeConfig().tokenKey);
    }

    static decodeToken(token: string): any {
        return jwt.decode(token);
    }

    public static verifyToken(tokenData: any): boolean {
        const currentTimeInSeconds = Math.floor(Date.now() / 1000);
        return !(!tokenData || tokenData.exp < currentTimeInSeconds);
    }

}

export default TokenService;
