import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import  { resolve } from 'path'
import Markdown from 'vite-plugin-md'

export default defineConfig({
    plugins:[
        Vue({
            include: [/\.vue$/, /\.md$/],
        }),
        Markdown(),
    ],
    resolve:{
        alias:{
            '@':resolve(__dirname,'src'),
            '#':resolve(__dirname,'src/components'),
            '~':resolve(__dirname,'src/assets'),
        },
    },
})