<template>
  <section>
    <NGrid
      :cols="24"
      :x-gap="10"
      :y-gap="10"
      item-responsive
      class="items-center"
    >
      <NGridItem
        :span="span"
        :offset="offset"
      >
        1
      </NGridItem>
      <NGridItem
        :span="span"
        :offset="offset"
      >
        1
      </NGridItem>
      <NGridItem
        :span="span"
        :offset="offset"
      >
        1
      </NGridItem>
      <NGridItem
        :span="span"
        :offset="offset"
      >
        1
      </NGridItem>
      <NGridItem
        :span="span"
        :offset="offset"
      >
        1
      </NGridItem>
    </NGrid>
  </section>
</template>
<script lang="ts" setup>
import { NGrid, NGridItem } from 'naive-ui'
const span = '0:24 600:18 800:12 1200:8 1600:6 2400:4'
const offset = '0:0 600:3 800:0'
</script>