export const useGlobalStore = defineStore('global', {
    state: () => ({
        sideBarOpen: false,
    }),
    actions: {
        toggleSidebar() {
            this.$state.sideBarOpen = !this.$state.sideBarOpen;
            console.log(this.sideBarOpen)
        }
    },
    getters: {
        getSideBarOpen: (state) => { console.log('state.sideBarOpen', state.sideBarOpen); return state.sideBarOpen;},
    }
});
