import type {IUser} from "~/types/IUser";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            id: '',
            firstName: '',
            lastName: '',
            avatar: '',
            stripeCustomerId: '',
        } as IUser,
    }),
    actions: {
        setUserInStore(user: IUser) {
            this.$state.user = user;
        },
    },
    getters: {

        name: (state) => state.user.firstName + ' ' + state.user.lastName,
        id: (state) => state.user.id,
        getUser: (state): IUser => { return state.user || {} },
        isAdmin: (state): boolean => { return state.user.role === 'ADMIN'; },
        isUser: (state): boolean => { return state.user.role === 'USER'; },
        isSubscriber: (state): boolean => { return state.user.stripeCustomerId !== '' && state.user.stripeCustomerId !== null; },
    },
    persist: true,
});
