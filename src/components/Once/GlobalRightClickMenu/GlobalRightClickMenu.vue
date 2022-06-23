<template>
  <section class="global-right-click-section" @contextmenu="onContextmenu">
    <slot />
    <NDropdown
      placement="bottom-start"
      trigger="manual"
      :x="position.x"
      :y="position.y"
      :options="options"
      :show="showDropdown"
      :on-clickoutside="onClickoutside"
    />
  </section>
</template>
<script lang="ts" setup>
  import { nextTick, reactive, ref } from 'vue'
  import { NDropdown } from 'naive-ui'

  const showDropdown = ref(false)

  const options = [
    {
      label: '显示文档',
      key: 'showDocs'
    }
  ]

  const position = reactive({
    x: 0,
    y: 0
  })

  const onContextmenu = (e: MouseEvent) => {
    e.preventDefault()
    showDropdown.value = false
    nextTick(() => {
      showDropdown.value = true
      position.x = e.clientX
      position.y = e.clientY
    })
  }

  const onClickoutside = () => {
    showDropdown.value = false
  }
</script>
<style scoped>
  .global-right-click-section {
    height: 100vh;
    width: 100vw;
  }
</style>
