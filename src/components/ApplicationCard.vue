<template>
  <section
    v-size="size"
    class="bg-red-700"
  >
    <slot />
  </section>
</template>
<script lang="ts" setup>
import useThemeSize from '@/hooks/useThemeSize'

const { size } = useThemeSize('app', 'default')
</script>