import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Markdown from 'vite-plugin-md'
import highlight from 'markdown-it-highlightjs'

export default defineConfig({
    base:'./',
    plugins: [
        Vue({
            include: [/\.vue$/, /\.md$/],
        }),
        Markdown({
            markdownItSetup(md) {
                md.use(highlight, {})
            },
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '#': resolve(__dirname, 'src/components'),
            '~': resolve(__dirname, 'src/assets'),
        },
    },
})