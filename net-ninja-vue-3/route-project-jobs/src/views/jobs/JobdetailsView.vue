<template>
  <div class="main-div" v-show="job.id">
    <h1 class="flex-items-columns">Jobs Details</h1>
    <h2 class="flex-items-columns">{{ job.title }}</h2>
    <p class="flex-items-columns">{{ job.type }}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data(){
      return {
          job: {},
      }
  },
  mounted(){
    fetch('http://localhost:3000/jobs/' + this.id)
        .then(res => res.json())
        .then(data => this.job = data)
        .catch(err => console.log(err.message));
  }
};
</script>

<style >
</style>