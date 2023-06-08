<template>
  <div class="login-box">
    <h2>Create a new job</h2>
    <form class="add" @submit.prevent="createJob">
      <div class="input-field">
        <input class="form-control" type="text" name="jobTitle" v-model="jobTitle" placeholder="Enter jobTitle" />
      </div>
      <div class="input-field">
        <input class="form-control" type="text" name="jobDescription" v-model="jobDescription" placeholder="Enter jobDescription" />
      </div>
      <div class="input-field">
        <input class="form-control" type="text" name="jobLocation" v-model="jobLocation" placeholder="Enter jobLocation" />
      </div>
      <button type="submit">Add new job</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateJobComp",
  data() {
    return {
      jobTitle: "",
      jobDescription: "",
      jobLocation: "",
    };
  },
  methods: {
    async createJob() {
      let result = await axios.post(`${process.env.API_URL}/createJob`, {
        jobTitle: this.jobTitle,
        jobDescription: this.jobDescription,
        jobLocation: this.jobLocation,
      });
      console.log(result);
      if (result.status == 201) {
        this.$router.push({ name: "AllJobs" });
        // Remove form data from the URL
        history.replaceState({}, document.title, window.location.pathname);
      }
    },
  },
};
</script>

<style scoped>
.login-box {
  width: 400px;
  height: auto;
  background-color: white;
  margin-top: 60px;
  border-radius: 5px;
  padding: 40px;
  margin: auto;
  margin-top: 60px;
  border: 1px solid #e4e6e7;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
}

.input-field {
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 70px;
}

.form-control {
  width: 98%;
  height: 35px;
}
</style>
