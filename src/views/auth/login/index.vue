<template>
  <div class="login-container">
    <section class="absolute inset-y-0 left-1/20 flex">
      <div class="flex flex-col justify-center transform rotate-45">
        <div class="transform rotate-12 text-center mb-32"> 就一句话!,----？ </div>
        <div class="text-7xl mb-10">
          {{ currentTime[2] }}
        </div>
        <div class="flex text-4xl transform rotate-12">
          <div>{{ currentTime[0] }}</div>
          <div>，</div>
          <div>{{ currentTime[1] }}</div>
        </div>
      </div>
      <div class="grid h-80 gap-10">
        <n-input placeholder="hh" />
        <n-input />
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
  import { NInput } from 'naive-ui'
  import { ref } from 'vue'
  import { useIntervalFn } from '@vueuse/core'
  import dayjs from 'dayjs'
  const currentTime = ref<string[]>([])
  useIntervalFn(() => {
    currentTime.value = dayjs().format('YYYY/MM/DD|dddd|HH:mm:ss').split('|')
    return 0
  }, 1000)
</script>

<style scoped>
  .login-container {
    width: 100vw;
    height: 100vh;
    position: relative;
  }
</style>
