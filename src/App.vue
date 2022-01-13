<template>
    <div>我正在使用{{ version }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const version = ref('Vue3')
</script>
