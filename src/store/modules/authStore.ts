import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null as string | null,
        user: null as string | null,
    }),
    actions: {
        setAuthData(token: string, user: string) {
            this.token = token
            this.user = user
        },
        clearAuthData() {
            this.token = null
            this.user = null
        },
    },
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
})
