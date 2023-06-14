<script lang="ts" setup>
  import { computed } from 'vue'
  import { NCard, NDivider, NForm, NSelect } from 'naive-ui'
  import { useI18n } from 'vue-i18n'
  import { useSettingStore } from '@/stores/setting'
  const { locale, availableLocales } = useI18n<any>({ useScope: 'global' })

  const languageMap = new Map([
    ['en', 'English'],
    ['ja', '日本語'],
    ['zh_CN', '简体中文']
  ])

  const selectList = computed(() =>
    availableLocales.map((lang) => ({
      label: languageMap.get(lang),
      value: lang
    }))
  )

  const change = (value: string) => {
    locale.value = value
    updateLang(value)
  }

  const { updateLang } = useSettingStore()
</script>
<template>
  <NForm>
    <NCard>
      <NDivider>
        <Language>语言</Language>
      </NDivider>
      <NSelect :value="locale" :options="selectList" :on-update:value="change" />
    </NCard>
  </NForm>
</template>
