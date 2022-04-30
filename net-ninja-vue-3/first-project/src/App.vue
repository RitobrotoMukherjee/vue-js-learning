<template>
  <div class="main-divs">
    <h1 class="items">{{ title }}</h1>
    <input class="items" type="text" ref="testRef" />
    <button class="items" @click="clickHandle">Click Me</button>
  </div>
</template>

<script>
let dataObj = {
  title: "Ref Checks",
};

export default {
  name: "App",
  data() {
    return dataObj;
  },
  methods: {
    clickHandle(){
      let html = `<p class="items">Hi Test</p>`;
      console.log("Original ref:",this.$refs.testRef);
      console.log("sibling or ref:",this.$refs.testRef.nextSibling);
      this.$refs.testRef.insertAdjacentHTML('afterend', html);
    }
  }
};
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
.main-divs {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2;
  margin: 10px auto;
  padding: 20px;
  border: 1px solid rgb(159, 159, 156);
  background-color: #fff;
  border-radius: 4px;
  transition: all 2s;
}
.main-divs:hover{
  background-color: aqua;
  box-shadow: 1px 6px 9px 3px #2c3e50;
}
.items{
  margin: 10px;
  width: 80%;
  padding: 10px;
}
</style>
