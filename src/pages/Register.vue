<template>
  <div class="hello">
    <h1>Register</h1>
    <dynamic-form apiUrl="5a10a2e62d0000bc045d1671"></dynamic-form>
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
