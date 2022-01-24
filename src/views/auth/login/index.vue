<template>
  <div class="login-container">
    <section class="current-time">
      <div class="text-7xl mb-10">
        {{ currentTime[2] }}
      </div>
      <div class="flex text-4xl">
        <div>{{ currentTime[0] }}</div>
        <div>，</div>
        <div>{{ currentTime[1] }}</div>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { onMounted,onUnmounted,ref } from 'vue'
import { useDateNow, useNow } from 'vue-composable'
import dayjs from 'dayjs'
const currentTime = ref<string[]>([])
const { remove } = useNow({
    timeFn(){
        currentTime.value = dayjs().format('YYYY/MM/DD|dddd|HH:mm:ss').split('|')
        return 0
    },
})
onUnmounted(remove)
</script>

<style scoped>
.login-container {
  width: 100vw;
  height: 100vh;
}

.current-time {
  position: fixed;
  left: 5%;
  bottom: 5%;
}
</style>