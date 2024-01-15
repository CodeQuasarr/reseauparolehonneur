import useErrorMapper from "~/composables/useErrorMapper";
import type {IUser} from "~/types/IUser";
import {useUserStore} from "~/stores/userStore";
import {notifySuccess} from "~/utils/config";
import {useTokenStore} from "~/stores/tokenStore";
import {useGlobalStore} from "~/stores/globalStore";

export async function registerWithEmail(user: any): Promise<FormValidation> {

    try {
        const data = await $fetch<{ hasErrors: false, loggedIn: true, statusMessage: '' }>('/api/auth/register', {
            method: 'POST',
            body:  user
        })

        if (data) {
            useGlobalStore().setNewAccount(true)
            await useRouter().push('/login')
        }

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
            useTokenStore().setAuthToken(result?.accessToken)
            await useRouter().push('/private')
        }

        return { hasErrors: false, loggedIn: true }
    } catch (error: any) {
        return useErrorMapper(error.data.data)
    }
}

export async function verifyConfirmationEmail(token: any) {
    try {
        const result = await $fetch('/api/auth/verify-email', {
            method: 'POST',
            body:  token
        })

        console.log('result', result)

        if (result) {
            notifySuccess(result.statusMessage)
            await useRouter().push('/login')
        }

        return { hasErrors: false, loggedIn: true }
    } catch (error: any) {
        console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeee', error.data.data)
        return useErrorMapper(error.data.data)
    }
}


