<template>
  <v-app>
    <v-navigation-drawer
      persistent
      width="230"
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-list>
        <v-list-tile v-for="(item, i) in orderedNavs" :key="i" :to="{path: `/${lang}${item.link}`}" :exact="i === 0">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app dark :clipped-left="clipped" v-show="validUser" color="primary">
      <v-toolbar-title class="d-flex align-center ml-0 mr-2">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <a class="logo" href="/">
          <img src="/static/lego_white.png" title="Logo" />
        </a>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        prepend-icon="search"
        label="Search"
        class="hidden-sm-and-down ml-5"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn to="/" color="success">User side</v-btn>
      <v-btn @click="toggleLanguage">{{ $t('language') }}</v-btn>

      <v-menu offset-y transition="slide-y-transition" bottom v-if="!$route.meta.candidateView">
        <v-list-tile-avatar slot="activator">
          <img v-bind:src="user.avatar">
        </v-list-tile-avatar>
        <v-list>
          <v-list-tile active-class="" :to="{path: '/my-account'}">
            <v-list-tile-action>
              <v-icon>account_box</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>My Account</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="logout">
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
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
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      validUser: true,
      user: {
        avatar: 'https://randomuser.me/api/portraits/men/85.jpg'
      },
      navs: [],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'Talentera'
    };
  },
  computed: {
    orderedNavs: function() {
      return this.navs.sortBy('order');
    },
    ...mapGetters(['alert', 'snackbar', 'lang', 'loading'])
  },
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
    },
    closeSnackbar() {
      this.$store.dispatch('closeSnackbar');
    },
    toggleLanguage() {
      if (this.lang === 'en') {
        this.$store.dispatch('changeLang', 'ar');
      } else {
        this.$store.dispatch('changeLang', 'en');
      }
    },
    logout() {
      this.$store.dispatch('signOut');
    }
  },
  created() {
    this.navs = [
      {
        icon: 'dashboard',
        title: 'Admin side',
        link: '/app',
        order: 2
      },
      {
        icon: 'bar_chart',
        title: 'Charts Demo',
        link: '/charts',
        order: 3
      },
      {
        icon: 'view_module',
        title: 'Listing Card',
        link: '/listing-cards',
        order: 4
      },
      {
        icon: 'table_chart',
        title: 'Listing Table',
        link: '/listing-table',
        order: 5
      },
      {
        icon: 'text_fields',
        title: 'Form',
        link: '/form',
        order: 6
      }
    ];
  }
};

Array.prototype.sortBy = function(p) {
  return this.slice(0).sort(function(a, b) {
    return a[p] > b[p] ? 1 : a[p] < b[p] ? -1 : 0;
  });
};
</script>
