<template>
  <NForm>
    <NCard>
      <NDivider>
        <Language>尺寸</Language>
      </NDivider>
      <NFormItem :label="t('图标')">
        <NSlider
          step="mark"
          :tooltip="false"
          :marks="marks"
          :max="Number(max(Object.keys(marks)))"
          :default-value="themeSizeMap.get(store.size)"
          @update:value="store.updateSize(marks[$event as number])"
        />
      </NFormItem>
    </NCard>
  </NForm>
</template>
<script lang="ts" setup>
  import { themeSizeMap } from '@/hooks/useThemeSize'
  import { useSettingStore } from '@/stores/setting'
  import { objectKeyValueExchange } from '@/utils/transform'
  import { max } from 'lodash-es'
  import { NCard, NDivider, NForm, NFormItem, NSlider } from 'naive-ui'
  import { useI18n } from 'vue-i18n'

  const marks: Record<number, ThememSize> = objectKeyValueExchange(Object.fromEntries(themeSizeMap))
  const store = useSettingStore()
  const { t } = useI18n()
</script>
