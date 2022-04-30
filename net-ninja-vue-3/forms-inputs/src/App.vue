<template>
  <h1>Basic Forms</h1>
 <FirstForm :countries="countryList" />
</template>

<script>
import FirstForm from './components/first-form.vue';

let dataObj = {
  countryList: ["India", "Russia", "Uganda", "USA", "UK", "France"],
}

export default {
  name: 'App',
  components: {
    FirstForm
  },
  data(){
    return dataObj;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
  background: #eee;
}
</style>
