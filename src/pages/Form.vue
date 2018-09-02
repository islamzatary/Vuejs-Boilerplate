<template>
  <div>
    <h1>Forms</h1>
    <dynamic-form apiUrl="5b8ae03f2c0000d310281022"></dynamic-form>
  </div>
</template>

<script>
import DynamicForm from '@/components/dynamicForm/DynamicForm';

export default {
  name: 'Form',
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

a {
  color: #42b983;
}
</style>
