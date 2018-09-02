<template>
  <div class="hello">
    <h1 class="my-3">{{ msg }}</h1>
    <div>
      {{ $t('home-txt') }}
    </div>
    <h3 class="mt-5">Available Vuex Actions:</h3>
    <v-btn @click="showAlert" color="primary">Show Alert</v-btn>
    <v-btn @click="showSnackbar" color="primary">Show Snackbar</v-btn>
    <v-btn @click="toggleLoading" color="primary">Loading</v-btn>
    <h3 class="mt-5">Helper Components:</h3>
    <v-btn @click="confirmationDialog = true" color="primary">Show Confirmation Dialog</v-btn>
    <confirmation v-model="confirmationDialog" title="Warning" text="are you sure you want to delete this item" @onSuccess="doSomthing"></confirmation>
  </div>
</template>

<script>
import Confirmation from '@/components/confirmation/confirmation.vue';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js Boilerplate',
      confirmationDialog: false
    };
  },
  methods: {
    showSnackbar() {
      this.$store.dispatch('snackbar', {
        color: 'success',
        text: "Hi I'm a Toast"
      });
    },
    showAlert() {
      this.$store.dispatch('alert', {
        color: 'success',
        text: "Hi I'm a Alert"
      });
    },
    toggleLoading() {
      this.$store.dispatch('toggleLoading');
      setTimeout(() => {
        this.$store.dispatch('toggleLoading');
      }, 1000);
    },
    doSomthing() {
      console.log('Confirmed');
    }
  },
  components: {
    Confirmation
  },
  i18n: {
    messages: {
      en: require('@/i18n/en/home.json'),
      ar: require('@/i18n/ar/home.json')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
