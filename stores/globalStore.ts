export const useGlobalStore = defineStore('global', {
    state: () => ({
        sideBarOpen: false,
    }),
    actions: {
        toggleSidebar() {
            this.$state.sideBarOpen = !this.$state.sideBarOpen;
        }
    },
    getters: {
        getSideBarOpen: (state) =>  state.sideBarOpen,
    }
});
