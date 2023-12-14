import {useUserStore} from "~/stores/userStore";


export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = useUserStore()

    if (!user.isLogged && to.path.startsWith('/private')) {
        return navigateTo('/login')
    }
    if ( user.isLogged && (to.name === 'login' || to.name === 'register') ) {
        return navigateTo('/private')
    }
})
