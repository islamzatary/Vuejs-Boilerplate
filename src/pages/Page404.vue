<template>
  <div class="text-md-center pa-4 mt-4">
    <h1 class="display-2 primary--text">Whoops, 404</h1>
    <p>{{ $t('not-found') }}</p>
    <div><v-btn outline color="primary" :to="{path: `/${lang}`}">Get me out of here!</v-btn></div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'


export default {
  name: 'P404',
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
    ...mapGetters([
        'lang',
      ])
  }
}
</script>
