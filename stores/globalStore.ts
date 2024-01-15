export const useGlobalStore = defineStore('global', {
    state: () => ({
        sideBarOpen: false,
        newAccount: false,
    }),
    actions: {
        toggleSidebar() {
            this.$state.sideBarOpen = !this.$state.sideBarOpen;
        },

        setNewAccount(newAccount: boolean) {
            this.$state.newAccount = newAccount;
        }
    },
    getters: {
        getSideBarOpen: (state) =>  state.sideBarOpen,
        isNewAccount: (state) =>  state.newAccount,
    }
});
