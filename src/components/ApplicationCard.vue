<template>
  <section
    v-size="size"
    :class="[
      'flex justify-center items-center border rounded-xl',
      'hover:bg-warm-gray-100 text-red-400'
    ]"
  >
    <slot />
    <vueIcon
      :style="{ fontSize: `${size / 1.5}px` }"
    />
  </section>
</template>
<script lang="ts" setup>
import useThemeSize from '@/hooks/useThemeSize'
import { useStore } from '@/stores/application/index'
import { defineProps } from 'vue'

interface IProps {
  name: string
}
const props = defineProps<IProps>()

const { size = NaN } = useThemeSize('app', 'default')

const { getAppInfo } = useStore()
const { vueIcon } = getAppInfo(props.name)
</script>