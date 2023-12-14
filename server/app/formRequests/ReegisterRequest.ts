import {z} from "zod";
import {H3Event} from "h3";

const registerRequestSchema = z.object({
    email:
        z
            .string({ required_error: "L'email est requis" })
            .email(),

    password:
        z
            .string({ required_error: "Le mot de passe est requis" })
            .min(8, "Le mot de passe doit contenir au moins 8 caractères")
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, "Le mot de passe doit contenir au moins 1 majuscule, 1 chiffre et 1 caractère spécial"),

    confirmPassword:
        z
            .string({ required_error: "Le mot de passe est requis" })
            .min(8, "Le mot de passe doit contenir au moins 8 caractères")
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, "Le mot de passe doit contenir au moins 1 majuscule, 1 chiffre et 1 caractère spécial"),

    firstName:
        z
            .string({ required_error: "Le prénom est requis" })
            .min(3, "Le prénom doit contenir au moins 3 caractères")
            .max(255, "Le prénom doit contenir au maximum 255 caractères")
            .refine((value) => value.trim() !== "", "Le prénom ne doit pas être vide"),

    lastName:
        z
            .string({ required_error: "Le nom est requis" })
            .min(3, "Le nom doit contenir au moins 3 caractères")
            .max(255, "Le nom doit contenir au maximum 255 caractères")
            .refine((value) => value.trim() !== "", "Le nom ne doit pas être vide"),
    avatar:
        z
            .string()
            .optional()
            .nullable(),
});


export type RegisterRequestType = z.infer<typeof registerRequestSchema>;

export default async function validateRegisterRequest(event: H3Event) {
    const data: RegisterRequestType = await readBody(event);
    return await registerRequestSchema.parseAsync(data);
}
