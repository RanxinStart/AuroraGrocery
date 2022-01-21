import { createSpacing } from './src/utils/create'
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    theme: {
        spacing: createSpacing(),
    },
    extract: {
        include: ['src/**/*.{vue,html,jsx,tsx}'],
        exclude: ['node_modules', '.git'],
    },
})