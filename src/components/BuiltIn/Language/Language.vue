<template>
  {{ t(convertValue) }}
</template>
<script lang="ts" setup>
  import { useSlots, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n({ useScope: 'global' })

  const convertValue = ref('')
  if (useSlots().default) {
    const vNodeList = useSlots().default?.()
    const value = vNodeList?.find(({ children }) => typeof children === 'string')
    if (value && typeof value.children === 'string') {
      convertValue.value = value.children
    } else {
      console.warn('Language组件子节点的根节点不是文本节点')
    }
  }
</script>
