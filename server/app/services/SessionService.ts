import jwt from 'jsonwebtoken';
import {prisma} from "~/server/database";
import * as crypto from 'crypto';
import {H3Event} from "h3";

class SessionService {
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

    static getTokenFromQuery(event: any): string {
        const token = event.query.token;
        if (!token) {
            throw new Error('Vous n\'êtes pas autorisé à accéder à cette ressource');
        }
        return token;
    }

    static async setSession( userId: string, refreshToken: string) {
        return prisma.session.create({
            data: {
                userId: userId,
                refreshToken: refreshToken
            }
        });
    }

    static secureSerialize(obj: object, secretKey: string): string {
        // Sérialise l'objet en une chaîne JSON
        const jsonString = JSON.stringify(obj);

        // Génère une clé de chiffrement à partir de la clé secrète
        const key = crypto.scryptSync(secretKey, 'salt', 32);

        // Initialise le vecteur d'initialisation (IV)
        const iv = Buffer.alloc(16, 0); // Vous devez utiliser un IV unique pour chaque encodage

        // Crée un objet Cipher avec l'algorithme AES-256-CBC
        const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

        // Chiffre la chaîne JSON avec la clé secrète
        let encryptedData = cipher.update(jsonString, 'utf-8', 'hex');
        encryptedData += cipher.final('hex');

        // Encode la chaîne chiffrée en Base64
        return Buffer.from(encryptedData, 'hex').toString('base64');
    }

    static secureDeserialize(cookieValue: string, secretKey: string) {
        // Décoder la chaîne Base64
        const encryptedData = Buffer.from(cookieValue, 'base64').toString('hex');

        // Génère une clé de chiffrement à partir de la clé secrète
        const key = crypto.scryptSync(secretKey, 'salt', 32);

        // Initialise le vecteur d'initialisation (IV)
        const iv = Buffer.alloc(16, 0); // Assurez-vous d'utiliser le même IV que celui utilisé pour le chiffrement

        // Crée un objet Decipher avec l'algorithme AES-256-CBC
        const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

        // Déchiffre la chaîne avec la clé secrète
        let decryptedData = decipher.update(encryptedData, 'hex', 'utf-8');
        decryptedData += decipher.final('utf-8');

        // Parser la chaîne JSON
        return JSON.parse(decryptedData);
    }

    static async getUserSessionByAuthToken(authToken: string) {
        // deserialize token
        const {token} = this.secureDeserialize(authToken, useRuntimeConfig().sessionKey);
        // decode token
        const decodedToken = this.decodeToken(token);
        return prisma.session.findUnique({
            where: {
                userId: decodedToken.userId,
            },
            select: {
                user: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                    }
                }
            }
        });
    }

    static async makeSessionCookie(event: H3Event, session: any, secretKey: string) {
        const authToken = this.secureSerialize(session, secretKey);
        setCookie(event, 'authToken', authToken, {path: '/', httpOnly: true, secure: true, sameSite: 'strict'});
        return await this.getUserSessionByAuthToken(authToken);
    }

    deleteSession() {
        return "token";
    }


}

export default SessionService;
