<script lang="ts" setup>
  import { NGrid, NGridItem } from 'naive-ui'
  import * as modules from './components'
  const span = '0:24 600:18 800:12 1200:8 1600:6 2400:4'
  const offset = '0:0 600:3 800:0'
</script>
<template>
  <section class="p-10">
    <NGrid :cols="24" :x-gap="10" :y-gap="10" item-responsive class="items-center">
      <NGridItem v-for="(item, i) in modules" :key="i" :span="span" :offset="offset">
        <Component :is="item" />
      </NGridItem>
    </NGrid>
  </section>
</template>
