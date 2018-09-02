<template>
  <v-app>
    <v-toolbar fixed app :clipped-left="clipped" v-show="validUser">
      <v-toolbar-title class="d-flex align-center ml-0 mr-2">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" v-if="false"></v-toolbar-side-icon>
        <a class="logo" href="/">
          <img src="/static/lego.png" title="Placeholder Logo" />
        </a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="register" outline color="indigo">register</v-btn>
      <v-btn to="login" outline color="teal">login</v-btn>
      <v-btn to="app" color="warning">Admin side</v-btn>
      <v-btn @click="toggleLanguage" color="primary">{{ $t('language') }}</v-btn>
    </v-toolbar>
    <v-content>
      <v-alert :outline="alert.outline" :type="alert.type" :icon="alert.icon" :color="alert.color" :dismissible="alert.dismissible" :transition="alert.transition" :value="alert.val" v-model="alert.val">{{alert.text}}</v-alert>
      <v-snackbar
        :color="snackbar.color"
        :timeout="snackbar.timeout"
        v-model="snackbar.visible"
        :top="snackbar.top"
        :left="snackbar.left"
        :right="snackbar.right"
        :bottom="snackbar.bottom"
      >
        {{ snackbar.text }}
      <v-btn v-if="snackbar.close" dark flat @click="closeSnackbar">Close</v-btn>
      </v-snackbar>
      <v-dialog v-model="loading" persistent max-width="150" content-class="loadingDialog">
        <v-progress-circular indeterminate :size="100" :width="3" color="primary" class="mx-auto"></v-progress-circular>
      </v-dialog>
      <v-slide-y-transition mode="out-in">
          <router-view></router-view>
      </v-slide-y-transition>
    </v-content>
    <v-footer :fixed="fixed" app v-show="validUser">
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        clipped: true,
        drawer: false,
        fixed: false,
        validUser: true,
        user: {
          avatar: "https://randomuser.me/api/portraits/men/85.jpg"
        },
        miniVariant: true,
        right: true,
        rightDrawer: false,
        title: 'Talentera'
      }
    },
    computed: {
      ...mapGetters([
        'alert',
        'snackbar',
        'lang',
        'loading',
        'layout'
      ])
    },
    methods: {
      closeSnackbar() {
        this.$store.dispatch('closeSnackbar');
      },
      toggleLanguage() {
        if(this.lang === 'en') {
          this.$store.dispatch('changeLang', 'ar');
        } else {
          this.$store.dispatch('changeLang', 'en');
        }
      }
    },
    async created(){}
  }
</script>
