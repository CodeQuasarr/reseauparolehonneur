import {z} from "zod";
import {H3Event} from "h3";

const loginRequestSchema = z.object({
    email:
        z
            .string({
                required_error: "L'email est requis",
            })
            .email(),

    password:
        z
            .string({
                required_error: "Le mot de passe est requis",
            }),

    rememberMe:
        z
            .boolean()
});

export type LoginRequestType = z.infer<typeof loginRequestSchema>;

export default async function validateLoginRequest(event: H3Event) {
    const data: LoginRequestType = await readBody(event);
    return await loginRequestSchema.parseAsync(data);
}
