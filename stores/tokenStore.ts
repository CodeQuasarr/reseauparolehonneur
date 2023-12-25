
export const useTokenStore = defineStore('authToken', {
    state: () => {
        return {
            authToken: '',
            authenticated: false,
        }
    },
    actions: {
        setAuthToken(token: string) {
            this.$state.authToken = token;
            if (token) {
                this.$state.authenticated = true;
            } else {
                this.$state.authenticated = false;
            }
        },

        setAuthenticated(authenticated: boolean) {
            this.$state.authenticated = authenticated;
        }
    },
    getters: {
        getAuthToken: (state): string => { return state.authToken || '' },
        isLogged: (state): boolean => { return state.authenticated; },
    },
    persist: true,
});
