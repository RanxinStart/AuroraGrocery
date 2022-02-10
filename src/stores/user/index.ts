import { defineStore } from 'pinia'
import { actions } from './actions'

export const useUserStore = defineStore('user', {
    state() {
        return {
            name: undefined,
            count: 0,
        }
    },
    getters: {
        userName(state: any) {
            return state.name || '默认名称'
        },
    },
    actions,
})