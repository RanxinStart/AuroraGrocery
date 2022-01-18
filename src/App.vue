<template>
  <mdModule />
  <div
    style="color:red"
    :class="[
      'italic', 'text-3xl', 'text-stroke-sm', 'text-stroke-sky-400',
      'text-sky-800', 'flex', 'items-end', 'justify-center','h-10'
    ]"
  >
    我正在使用{{ version }}
    <camera />
    <camera />
    <camera />
  </div>
</template>

<script lang="ts" setup>
import camera from '~icons/bi/wifi-off'


import { ref } from 'vue'
import mdModule from '@/mdModule.md'

const version = ref('Vue3')
</script>

<style>
div > Svg {
  background-clip: text;
  color: rgba(50, 50, 50, 1)
}
</style>
