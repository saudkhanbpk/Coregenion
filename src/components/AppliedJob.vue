<template>
  <div>
    <h2>Applied Jobs</h2>
    <div class="job-list">
      <div v-for="job in appliedjob" :key="job.id" class="job-item">
        <h3>{{ job.jobTitle }}</h3>
        <p>Job Status: {{ job.status }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AppliedJobComp",
  data() {
    return {
      appliedjob: [],
    };
  },
  async mounted() {
    try {
      const userDetails = JSON.parse(localStorage.getItem("userDetails"));
      const userId = userDetails.user._id;

      const response = await axios.post(`${process.env.API_URL}/getJob`, {
        userId: userId,
      });

      this.appliedjob = response.data;
    } catch (error) {
      console.log("Error fetching applied jobs:", error);
    }
  },
};
</script>

<style scoped>
h2 {
  color: blue;
}

.job-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.job-item {
  border: 1px solid #ccc;
  padding: 10px;
  width: 300px;
  margin: 20px;
}
</style>
