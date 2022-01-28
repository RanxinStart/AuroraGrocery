import { defineStore } from 'pinia'
import { actions } from './actions'

export const useStore = defineStore('user', {
    state() {
        return {
            appList:[],
        }
    },
    getters: {
        userName(state: any) {
            return state.name || '默认名称'
        },
    },
    actions,
})