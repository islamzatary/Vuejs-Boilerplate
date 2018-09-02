<template>
  <div>
    <h1>{{ $t('charts') }}</h1>
    <h4>{{ $t('head') }}</h4>
    <p>{{ $t('hello') }}</p>
    <chart
      url="http://www.mocky.io/v2/5acbd2572f00005300411775"
    ></chart>
  </div>
</template>

<script>
import ChartsBuilder from '@/components/chartsBuilder/ChartsBuilder.vue'
import {Api} from '@/utilities/Api'

export default {
  name: 'Charts',
  data () {
    return {
      charts: []
    }
  },
  components: {
    'chart': ChartsBuilder
  },
  i18n: {
    messages: {
      en: require('@/i18n/en/charts.json'),
      ar: require('@/i18n/ar/charts.json')
    }
  }
}
</script>
