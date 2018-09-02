<template>
  <v-app :class="lang">
    <component :is="layout"></component>
  </v-app>
</template>

<script>
  import appLayout from './layouts/appLayout'
  import simpleLayout from './layouts/simpleLayout'
  import { mapGetters } from 'vuex'

  const default_layout = "simple-layout";
  export default {
    data() {
      return {
      }
    },
    computed: {
      layout () {
        return (this.$route.meta.layout || default_layout);
      },
      ...mapGetters([
        'alert',
        'snackbar',
        'lang',
        'loading'
      ])
    },
    components: {
      'app-layout': appLayout,
      'simple-layout': simpleLayout
    },
    created() {

    }
  }

Array.prototype.sortBy = function(p) {
  return this.slice(0).sort(function(a,b) {
    return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
  });
}

</script>
<style>
  .en {
    direction: ltr;
  }
  .ar {
    direction: rtl;
  }
  .content--wrap {
    padding: 20px 56px;
  }
  .loadingDialog {
    box-shadow: none;
    height: 150px;
  }
  .loadingDialog .progress-circular {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
  }
  .logo img {
    vertical-align: middle;
    max-width: 85%;
  }
  @media only screen and (max-width: 767px) {
    .content--wrap {
      padding: 10px;
    }
  }
</style>
