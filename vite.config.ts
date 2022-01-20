import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Markdown from 'vite-plugin-md'
import highlight from 'markdown-it-highlightjs'
import WindiCSS from 'vite-plugin-windicss'
import codeCopy from 'markdown-it-copy'
import Icon from 'unplugin-icons/vite'
import autoprefixer from 'autoprefixer'
import VueI18n from '@intlify/vite-plugin-vue-i18n'

export default defineConfig({
    base: './',
    css: {
        postcss: {
            plugins: [
                autoprefixer(),
            ],
        },
    },
    plugins: [
        Vue({
            include: [/\.vue$/, /\.md$/],
        }),
        Icon({
            compiler: 'vue3',
            autoInstall: true,
        }),
        VueI18n({
            include: resolve(__dirname, './src/locales/**'),
        }),
        WindiCSS(),
        Markdown({
            markdownItSetup(md) {
                md.use(highlight, {})
                md.use(codeCopy, {
                    btnText: '复制',
                    successText: '成功~',
                })
            },
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '#': resolve(__dirname, 'src/components'),
            '~': resolve(__dirname, 'src/assets'),
        },
        extensions:['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json','.vue'],
    },
})