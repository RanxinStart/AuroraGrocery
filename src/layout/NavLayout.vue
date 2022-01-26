<template>
  <section
    class="menu"
    :class="[openMenu ? 'on' : 'off']"
    @click="openMenu = !openMenu"
  >
    <IconButton v-if="!openMenu" />
    <section v-else>
      <ApplicationCard />
    </section>
  </section>
  <router-view />
</template>
<script lang="ts">
import IconButton from '~icons/bytesize/chevron-bottom'
import ApplicationCard from '#/ApplicationCard'
</script>
<script setup lang="ts">
import { ref } from 'vue'


const openMenu = ref(false)

</script>
<style scoped>
.menu{
  @apply fixed inset-x-0 transition-all m-auto shadow flex;
  &.off {
    @apply w-28 h-22 justify-center rounded-b-md hover:bg-gray-50 cursor-pointer top-0;
  }
  &.on {
    @apply w-4/5 p-10 justify-center rounded-md top-20;
  }
}

</style>