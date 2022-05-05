<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'jobs' }">Jobs</router-link>
  </nav>
  <button class="pill-design" @click="redirectHome">Redirect To Home</button>
  <button class="pill-design" @click="goBack($event, -2)">Go Back</button>
  <button class="pill-design" @click="goForward(1)">Go Forward</button>
  <router-view/>
</template>

<script>
export default {
  methods: {
    redirectHome(){
      return this.$router.push({ name: 'home' });
    },
    goBack(ev, step){
      console.log(ev);
      return this.$router.go(step);
    },
    goForward(step){
      return this.$router.go(step);
    }
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  background: #f9f9fb;
  padding: 10px;
  text-decoration: none;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: #b5f8da;
  background: #02027a;

}
</style>
