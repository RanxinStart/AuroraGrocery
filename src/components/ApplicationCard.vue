<template>
  <section
    v-size="size"
    :class="[
      'flex justify-center items-center border rounded-xl',
      'hover:bg-warm-gray-100 text-red-400'
    ]"
  >
    <slot />
    <vueIcon :style="{ fontSize: `${size / 1.5}px` }" />
  </section>
</template>
<script lang="ts" setup>
import useThemeSize from '@/hooks/useThemeSize'
import { useSettingStore } from '@/stores/setting'
import { useAppStore } from '@/stores/application'
import { computed, defineProps } from 'vue'

interface IProps {
  name: string
}
const props = defineProps<IProps>()

const store = useSettingStore()
const size = computed(() => {
    return useThemeSize('app', store.size) || NaN
})

const { getAppInfo } = useAppStore()
const { vueIcon } = getAppInfo(props.name)
</script>