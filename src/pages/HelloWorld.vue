<template>
  <div class="hello">
    <h1 class="my-3">{{ msg }}</h1>
    <div>
      {{ $t('home-txt') }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js Boilerplate'
    };
  },
  methods: {},
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
