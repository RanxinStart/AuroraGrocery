<template>
  <App />
  <div
    :class="[
      'italic', 'text-3xl', 'text-stroke-sm', 'text-stroke-sky-400', 'text-sky-800'
    ]"
  >
    我正在使用{{ version }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import App from '@/App.md'

const version = ref('Vue3')
</script>
