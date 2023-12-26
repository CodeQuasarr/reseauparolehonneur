
export const useEvenementStore = defineStore('evenement', {
    state: () => {
        return {
            canPay: false,
        }
    },
    actions: {
        setCanPay(canPay: boolean) {
            this.$state.canPay = canPay;
        },
    },
    getters: {
        getCanPay(): boolean {
            return this.canPay;
        }
    },
    persist: true,
});
