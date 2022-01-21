<template>
  <md-module />
  <div
    class="title active"
    :class="[
      'italic', 'text-3xl', 'text-stroke-sm', 'text-stroke-sky-400',
      'text-sky-800', 'flex', 'items-end', 'justify-center', 'h-10',
    ]"
  >
    我正在使用{{ version }}
    <camera class="svg" />
    <camera />
    <camera />
  </div>
  <div
    class="title active"
    @click="store.count++"
  >
    {{ t('hello') }}
    {{ store.count }}
  </div>
</template>

<script lang="ts" setup>
import camera from '~icons/bi/wifi-off'
import { ref } from 'vue'
import mdModule from '@/mdModule.md'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { useStore } from '@/stores/user'
const store = useStore()
store.setCount(50)

const version = ref('Vue3')
</script>

<style>
.title {
  .svg {
    background-clip: text;
    color: #6cf;
  }
  &.active {
    color:red;
  }
} 
</style>