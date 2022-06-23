<template>
  <NMessageProvider>
    <GlobalRightClickMenu>
      <EmptyLayout />
    </GlobalRightClickMenu>
  </NMessageProvider>
</template>

<script lang="ts" setup>
  import EmptyLayout from '@/layout/EmptyLayout'
  import { GlobalRightClickMenu } from '#/Once'
  import { NMessageProvider } from 'naive-ui'
</script>
