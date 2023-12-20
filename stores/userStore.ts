import type {IUser} from "~/types/IUser";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            id: '',
            firstName: '',
            lastName: '',
            avatar: '',
        } as IUser,
        authToken: '',
        authenticated: false,
    }),
    actions: {
        setUserInStore(user: IUser) {

            this.$state.user = user;
        },

        setAuthToken(token: string) {
            this.$state.authToken = token;
            if (token) {
                this.$state.authenticated = true;
            } else {
                this.$state.authenticated = false;
            }
        },

        deleteCookieUser() {
            document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        },
    },
    getters: {

        name: (state) => state.user.firstName + ' ' + state.user.lastName,
        id: (state) => state.user.id,
        getAuthToken: (state): string => { return state.authToken || '' },
        getUser: (state): IUser => { return state.user || {} },
        isLogged: (state): boolean => { return state.authenticated; },
        isAdmin: (state): boolean => { return state.user.role === 'ADMIN'; },
    },
    persist: true,
});
