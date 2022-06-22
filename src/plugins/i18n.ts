import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { storage } from '@/stores/setting'

dayjs.locale('zh-cn')
export const i18n = createI18n({
  locale: storage.value.lang,
  messages
})
export default i18n
