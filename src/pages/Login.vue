<template>
  <div>
    <h1>Login</h1>
    <dynamic-form apiUrl="5b8a8a472c00003609280fc7"></dynamic-form>
  </div>
</template>

<script>
import DynamicForm from '@/components/dynamicForm/DynamicForm';

export default {
  name: 'register',
  components: {'dynamic-form':DynamicForm},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
