import Vue from 'vue';
import Router from 'vue-router';
import { store } from '@/store';
import config from '@/config/config';

import HelloWorld from '@/pages/HelloWorld';
import Home from '@/pages/Home';
import Charts from '@/pages/Charts';
import ListingCards from '@/pages/Listing-cards';
import ListingTable from '@/pages/Listing-table';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Form from '@/pages/Form';
import Page404 from '@/pages/Page404';
import Page500 from '@/pages/Page500';

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '/:lang',
      component: { template: '<router-view/>' },
      children: [
        {
          path: '',
          name: 'home',
          component: HelloWorld,
          meta: {
            layout: 'simple-layout'
          }
        },
        {
          path: 'app',
          name: 'app-home',
          component: Home,
          meta: {
            layout: 'app-layout'
          }
        },
        {
          path: 'charts',
          name: 'charts',
          component: Charts,
          meta: {
            layout: 'app-layout'
          }
        },
        {
          path: 'listing-cards',
          name: 'ListingCards',
          component: ListingCards,
          meta: {
            layout: 'app-layout'
          }
        },
        {
          path: 'listing-table',
          name: 'ListingTable',
          component: ListingTable,
          meta: {
            layout: 'app-layout'
          }
        },
        {
          path: 'login',
          name: 'login',
          component: Login,
          meta: {
            layout: 'simple-layout'
          }
        },
        {
          path: 'register',
          name: 'register',
          component: Register,
          meta: {
            layout: 'simple-layout'
          }
        },
        {
          path: 'form',
          name: 'form',
          component: Form,
          meta: {
            layout: 'app-layout'
          }
        },
        {
          path: 'server-error',
          name: 'page500',
          component: Page500,
          meta: {
            layout: 'simple-layout'
          }
        },
        {
          path: '*',
          name: 'page404',
          component: Page404,
          meta: {
            layout: 'simple-layout'
          }
        }
      ]
    }
  ],
  base: process.env.ROUTER_BASE,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  const lang = to.params.lang;
  const path = to.path;
  if (lang) {
    if (lang in config.lang.languages) {
      store.dispatch('setLang', lang).then(done => {
        next();
      });
    } else {
      next({ path: `/${store.getters.lang}${path}` });
    }
  } else {
    next({ path: `/${store.getters.lang}` });
  }
});
