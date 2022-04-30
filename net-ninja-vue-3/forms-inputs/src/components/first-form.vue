<template>
  <form>
    <label>Name:</label>
    <input type="email" required v-model="signupForm.name" />

    <label>Email:</label>
    <input type="email" required v-model="signupForm.email" />

    <label>Country</label>
    <select id="country" required v-model="signupForm.country">
      <option value="">Select Country</option>
      <option v-for="(country, i) in countries" :value="country" :key="i">
        {{ country }}
      </option>
    </select>

    <div class="terms">
      <input type="checkbox" id="terms" v-model="signupForm.terms" required />
      <label for="terms">Terms & conditions </label>
    </div>

    <label>Skills:</label>
    <input
      type="text"
      required
      @keyup="skillsAdd($event)"
      v-model="signupForm.tempSkill"
    />
    <div>
      <div v-for="(skill, i) in signupForm.skills" class="pill-design" :key="i" @click="deleteSkill($event, skill)">
        {{ skill }}
      </div>
    </div>
    <!-- other way to do the same as above -->

    <label>Positions To Apply(Use alt + ',' to add):</label>
    <input
      type="text"
      required
      @keyup.alt="designation"
      v-model="signupForm.tempD"
    />
    <div>
      <div
        v-for="(d, i) in signupForm.designations"
        class="pill-design"
        :key="i"
      >
        {{ d }}
      </div>
    </div>

    <div class="submit">
        <button>Create Account</button>
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
    skills: [],
    tempSkill: "",
    designations: [],
    tempD: "",
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
  methods: {
    skillsAdd(e) {
      if (
        e.key === "," &&
        this.signupForm.tempSkill &&
        !this.signupForm.skills.includes(this.tempSkill)
      ) {
          let skill = this.signupForm.tempSkill.slice(0, -1);
          this.signupForm.tempSkill = "";
        this.signupForm.skills.push(skill);
        
      }
      return;
    },
    deleteSkill(e, skill){
        // console.log(e);
        return this.signupForm.skills = this.signupForm.skills.filter((item) => skill !== item);
    },
    designation(e) {
      if (
        e.key === "," &&
        this.signupForm.tempD &&
        !this.signupForm.designations.includes(this.tempD)
      ) {
        this.signupForm.designations.push(this.signupForm.tempD);
        return (this.signupForm.tempD = "");
      }
      return;
    },
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
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  position: relative;
  top: 2px;
  width: 12px;
  margin: 2px 10px 0 0;
}
.pill-design {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
  .submit {
    text-align: center;
  }
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
</style>