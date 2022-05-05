<template>
  <div class="main-div">
    <h1 class="flex-items-columns">Jobs Details</h1>
    <h2 class="flex-items-columns">{{ id }}</h2>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data(){
      return {
          // id: this.$route.params.id
      }
  }
};
</script>

<style >
</style>