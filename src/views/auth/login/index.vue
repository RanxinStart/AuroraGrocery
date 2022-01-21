<template>
  <div class="login-container">
    <section>
      <div>16:21</div>
      <div class="flex gap-1 h-20">
        <div>2022/1/21</div>
        <div>星期五</div>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { createSpacing } from '@/utils/create'
console.log(
    createSpacing(),
)
</script>

<style scoped>
.login-container {
  width: 100vw;
  height: 100vh;
}
</style>