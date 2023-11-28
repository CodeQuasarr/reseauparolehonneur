import type {IUser} from "~/types/IUser";

export const useUserStore = defineStore('user', {
    state: (): IUser => ({
        id: '',
        firstName: '',
        lastName: '',
    }),
    actions: {
        setUserInStore(user: IUser) {
            this.$state.id = user.id;
            this.$state.firstName = user.firstName;
            this.$state.lastName = user.lastName;
        }
    },
    getters: {
        name: (state) => state.firstName + ' ' + state.lastName,
        id: (state) => state.id,
    },
    persist: true,
});
