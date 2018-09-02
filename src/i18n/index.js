import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {}

export const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en',
  silentTranslationWarn: true,
  messages // set locale messages
})