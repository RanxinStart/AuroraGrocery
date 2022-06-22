declare module 'vue' {
    export interface GlobalComponents {
        Language: typeof import('@/components/BuiltIn/index')['Language']
    }
}
export {}