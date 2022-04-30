<template>
  <form>
    <label>Name:</label>
    <input type="email" required v-model="signupForm.name" />

    <label>Email:</label>
    <input type="email" required v-model="signupForm.email" />

    <label >Country</label>
    <select id="country" required v-model="signupForm.country">
        <option value="">Select Country</option>
        <option v-for="(country, i) in countries" :value="country" :key="i">{{ country }}</option>
    </select>

    <div class="terms">
        <input type="checkbox" id="terms" v-model="signupForm.terms" required>
        <label for="terms">Terms & conditions </label>
    </div>

  </form>
  <p>Name: {{ signupForm.name }}</p>
  <p>Email: {{ signupForm.email }}</p>
  <p>Country: {{ signupForm.country }}</p>

  <!-- Extra element to reduce linter error -->
  <p></p>
  <!-- Extra Element end -->
</template>

<script>
let dataObj = {
  signupForm: {
    email: "",
    name: "",
    country: "",
    terms: false,
  },
};

export default {
  name: "first-form",
  props: ["countries"],
  data() {
    return {
      ...dataObj,
    };
  },
};
</script>

<style >
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type=checkbox] {
      display: inline-block;
      position: relative;
      top: 2px;
      width: 12px;
      margin: 2px 10px 0 0;
  }
</style>