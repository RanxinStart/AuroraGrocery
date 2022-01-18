import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Markdown from 'vite-plugin-md'
import highlight from 'markdown-it-highlightjs'
import WindiCSS from 'vite-plugin-windicss'
import codeCopy from 'markdown-it-code-copy'

export default defineConfig({
    base:'./',
    plugins: [
        Vue({
            include: [/\.vue$/, /\.md$/],
        }),
        WindiCSS(),
        Markdown({
            markdownItSetup(md) {
                md.use(highlight, {})
                md.use(codeCopy)
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