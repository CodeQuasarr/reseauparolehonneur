
import {useTokenStore} from "~/stores/tokenStore";


export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = useTokenStore()

    if (!useCookie('authToken').value && !user.isLogged && to.path.startsWith('/private')) {
        return navigateTo('/login')
    }
    if ( user.isLogged && (to.name === 'login' || to.name === 'register') ) {
        return navigateTo('/private')
    }

    if (to.path.startsWith('/private')) {
        const { data, error } = await useFetch('/api/auth/access-token', {
            method: 'GET'
        })

        if (data.value === false) {
            useCookie('authToken').value = null
            useCookie('user').value = null
            useTokenStore().setAuthenticated(false)
            await useRouter().push('/login')
        }
    }
})
