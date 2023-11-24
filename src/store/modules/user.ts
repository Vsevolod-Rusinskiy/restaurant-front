import { defineStore } from 'pinia'
// todo any
export const useUserStore = defineStore('user', {
    state: () => ({
        userData: null,
        isLoggedIn: false,
    }),
    actions: {
        setUser(data: any) {
            this.userData = data
            this.isLoggedIn = true
        },
        logout() {
            this.userData = null
            this.isLoggedIn = false
        },
        // Возможно, добавить действия для регистрации, входа и т.д.
    },
})
