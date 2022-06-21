<template>
  <section class="p-10">
    <NGrid :cols="24" :x-gap="10" :y-gap="10" item-responsive class="items-center">
      <NGridItem :span="span" :offset="offset">
        <NForm>
          <NCard>
            <NDivider>尺寸</NDivider>
            <NFormItem label="图标">
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
      </NGridItem>
      <NGridItem :span="span" :offset="offset">
        <NCard>
          <NDivider>壁纸</NDivider>
        </NCard>
      </NGridItem>
      <NGridItem :span="span" :offset="offset">
        <NCard>
          <NDivider>壁纸</NDivider>
        </NCard>
      </NGridItem>
      <NGridItem :span="span" :offset="offset">
        <NCard>
          <NDivider>壁纸</NDivider>
        </NCard>
      </NGridItem>
      <NGridItem :span="span" :offset="offset">
        <NCard>
          <NDivider>壁纸</NDivider>
        </NCard>
      </NGridItem>
    </NGrid>
  </section>
</template>
<script lang="ts" setup>
  import { themeSizeMap } from '@/hooks/useThemeSize'
  import { useSettingStore } from '@/stores/setting/index'
  import { max } from 'lodash-es'
  import { objectKeyValueExchange } from '@/utils/transform'
  import { NGrid, NGridItem, NCard, NDivider, NForm, NFormItem, NSlider } from 'naive-ui'
  const span = '0:24 600:18 800:12 1200:8 1600:6 2400:4'
  const offset = '0:0 600:3 800:0'

  // eslint-disable-next-line no-undef
  const marks: Record<number, ThememSize> = objectKeyValueExchange(Object.fromEntries(themeSizeMap))
  const store = useSettingStore()
</script>
