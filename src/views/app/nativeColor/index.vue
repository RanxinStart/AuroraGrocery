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
    <colorPicker
      :style="{
        color: colorValue
      }"
      class="ml-20 text-3xl cursor-pointer filter invert"
      @click="openEyeDropper"
    />
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import colorPicker from '~icons/gg/color-picker'
import { useMessage } from 'naive-ui'
const colorValue = ref('#66ccff')
const message = useMessage()

const openEyeDropper = async () => {
    if(window.EyeDropper){
        const eyeDropper = new EyeDropper()
        const { sRGBHex } = await eyeDropper.open()
        colorValue.value = sRGBHex
    }else{
        message.error('你的浏览器不支持"EyeDropper"! 请使用chrome 95版本')
    }
}

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