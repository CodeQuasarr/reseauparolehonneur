
import {useTokenStore} from "~/stores/tokenStore";


export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = useTokenStore()



    if (!useCookie('authToken').value && !user.isLogged && to.path.startsWith('/private')) {
        return navigateTo('/login')
    }
    if ( user.isLogged && (to.name === 'login' || to.name === 'register') ) {
        return navigateTo('/private')
    }
})
