import { MenuItem } from '@/interfaces/MenuItem'

export interface Category {
    id: number
    name: string
    items: MenuItem[]
}
