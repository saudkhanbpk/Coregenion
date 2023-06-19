<template>
  <div>
    <h2>All Jobs</h2>

    <div class="card" v-for="job in allJobs" :key="job.id">
      <div class="card-content">
        <h3>{{ job.jobTitle }}</h3>
        <button v-on:click="apply(job._id)" class="apply-button">Apply</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AllJobsComp",
  data() {
    return {
      allJobs: [],
      userId: ""
    };
  },
  async mounted() {
    let result = await axios.get(`${process.env.API_URL}/getJobs`);
    this.allJobs = result.data;
    console.log(this.allJobs);
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    this.userId = userDetails.user._id;
  },
  methods: {
    async apply(jobId) {
      let status = "true";
      console.log("iddddddd", jobId);
      let result2 = await axios.post(`${process.env.API_URL}/appliedBy`, {
        jobId,
        status,
        userId: this.userId
      });
      console.log("result 2:", result2);
      alert("Apply Done");
      this.$router.push({ name: "AppliedJob" });
    }
  }
}
</script>

<style scoped>
h2 {
  color: blue;
}

.card {
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}

.card-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h3 {
  margin: 0;
}

.apply-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
