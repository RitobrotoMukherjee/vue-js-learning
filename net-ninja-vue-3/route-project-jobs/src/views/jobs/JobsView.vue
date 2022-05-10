<template>
  <div class="main-div">
    <h1 class="flex-items-columns">Jobs Lists</h1>
    <div class="flex-items-columns grid-list">
      <div class="grid-items" v-for="(job, i) in jobs" :key="i">
        <router-link :to="{ name: 'jobdetails', params: { id: job.id } }">
          <h2>{{ job.title }}</h2>
          <h3>{{ job.type }}</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then(data => this.jobs = data)
        .catch(err => console.log(err.message));
  }
};
</script>