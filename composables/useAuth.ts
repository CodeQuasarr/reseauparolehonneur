import useErrorMapper from "~/composables/useErrorMapper";
import type {IUser} from "~/types/IUser";
import {useUserStore} from "~/stores/userStore";

export async function registerWithEmail(user: any): Promise<FormValidation> {

    try {
        const data = await $fetch<{ hasErrors: false, loggedIn: true }>('/api/auth/register', {
            method: 'POST',
            body:  user
        })

        // if (data) {
        //     await useRouter().push('/login')
        // }

        return { hasErrors: false, loggedIn: true }
    } catch (error: any) {
        return useErrorMapper(error.data.data)
    }
}


export async function loginWithEmail(loginInfo: IUser) {
    try {
        const result: {user: IUser, accessToken: string} = await $fetch('/api/auth/login', {
            method: 'POST',
            body:  loginInfo
        })

        if (result) {
            useUserStore().setUserInStore(result?.user)
            useUserStore().setAuthToken(result?.accessToken)
            await useRouter().push('/private')
        }

        return { hasErrors: false, loggedIn: true }
    } catch (error: any) {
        return useErrorMapper(error.data.data)
    }
}
