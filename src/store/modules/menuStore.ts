import { defineStore } from 'pinia'
import axios from 'axios'
import { useAuthStore } from './authStore'
import { MenuItem } from '@/interfaces/MenuItem'
import { Category } from '@/interfaces/Category'

export const useMenuStore = defineStore('menu', {
    state: () => ({
        menuItemsWithCategories: [] as Category[],
    }),
    actions: {
        async fetchMenuItems() {
            try {
                const response = await axios.get(`${process.env.VUE_APP_API_URL}/categories/with-items`)
                this.menuItemsWithCategories = response.data
            } catch (error) {
                console.error('Ошибка при загрузке данных меню:', error)
            }
        },

        async deleteItem(itemId: number) {
            const authStore = useAuthStore()
            const token = authStore.token
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            }
            try {
                await axios.delete(`${process.env.VUE_APP_API_URL}/menu-items/${itemId}`, config)
                this.menuItemsWithCategories = this.menuItemsWithCategories.map((category) => ({
                    ...category,
                    items: category.items.filter((item) => item.id !== itemId),
                }))
            } catch (error) {
                console.error('Ошибка при удалении элемента меню:', error)
            }
        },

        async updateOrAddMenuList(updatedItem: MenuItem) {
            const category = this.menuItemsWithCategories.find((c) => c.id === updatedItem.categoryId)

            if (!category) {
                console.error('Категория не найдена')
                return
            }

            const itemIndex = category.items.findIndex((i) => i.id === updatedItem.id)

            if (itemIndex !== -1) {
                category.items.splice(itemIndex, 1, updatedItem)
            } else {
                category.items.push(updatedItem)
            }
        },
    },
})
