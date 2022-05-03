<template>
  <div class="home">
    <h1 class="flex-items-columns">HomePage</h1>
    <p class="flex-items-columns">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsam illum voluptates dicta eum omnis dignissimos voluptatibus non quae ipsa! Recusandae dolorum rerum quam beatae voluptatum iure nulla non molestias.</p>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    margin: 0 25px;
  }
</style>
