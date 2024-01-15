import TokenService from "~/server/app/services/TokenService";


export const validateCustomerToken = (token: string) => {
    const errors = new Map<string, { message: string | undefined }>()

    if (!token.trim()) {
        errors.set('token', { message: 'Le lien a expirer' })
    }

    const decodeToken = TokenService.decodeToken(token);

    if (!decodeToken || !decodeToken.userId || !decodeToken.exp) {
        errors.set('token', { message: '' })
    }
}
