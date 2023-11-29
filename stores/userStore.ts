import type {IUser} from "~/types/IUser";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            id: '',
            firstName: '',
            lastName: '',
        } as IUser,
        authToken: '',
    }),
    actions: {
        setUserInStore(user: IUser) {
            this.$state.user = user;
        },

        setAuthToken(token: string) {
            this.$state.authToken = token;
        },

        deleteCookieUser() {
            document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        },
    },
    getters: {
        name: (state) => state.user.firstName + ' ' + state.user.lastName,
        id: (state) => state.user.id,
        getAuthToken: (state): string => { return state.authToken || '' },
    },
    persist: true,
});
