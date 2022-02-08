<template>
  <section
    class="flex justify-center items-center"
    style="width: 100vw;height: 100vh;"
    :style="{
      backgroundColor: colorValue
    }"
  >
    <div
      class="p-2 filter invert"
      :style="{
        backgroundColor: colorValue
      }"
    >
      <input
        v-model="colorValue"
        class="color-input filter invert block"
        type="color"
      >
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const colorValue = ref('#66ccff')
</script>

<style scoped>
.color-input {
    @apply w-40 h-40;
    &::-webkit-color-swatch {
        border: none;
    }
    &::-webkit-color-swatch-wrapper {
        padding: 0;
    }
}
</style>