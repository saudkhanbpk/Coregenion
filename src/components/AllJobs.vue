<template>
  <div>
    <h2>All jobs</h2>
    <ul class="job-list">
      <li v-for="job in allJobs" :key="job.id" class="job-item">
        <span class="job-info">{{ userName }} applied for {{ job.jobTitle }}, current status: {{ job.status }}</span>
        <div class="job-actions">
          <button v-on:click="rej_btn(job._id)" class="reject-btn">Reject</button>
          <button v-on:click="hire_btn(job._id)" class="hire-btn">Hire</button>
          <button v-on:click="inter_btn(job._id)" class="interview-btn">Interview</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AllJobsComp",
  data() {
    return {
      allJobs: []
    };
  },
  async mounted() {
    let result = await axios.get(`${process.env.API_URL}/getJobs`);
    this.allJobs = result.data;
    console.log(this.allJobs);
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));

    const userName = userDetails.user.fullName;
    console.log(userName)
  },
  methods: {
    async rej_btn(id) {
      let status = "rejected";
      let result2 = await axios.post(`${process.env.API_URL}/updateJobStatus`, {
        id,
        status,
      });
      console.log("result 2 :", result2);
      const job = this.allJobs.find(user => user._id === id);
      if (job) {
        job.status = status;
      }
    },
    async hire_btn(id) {
      let status = "hire";
      let result2 = await axios.post(`${process.env.API_URL}/updateJobStatus`, {
        id,
        status,
      });
      console.log("result 2 :", result2);
      const job = this.allJobs.find(user => user._id === id);
      if (job) {
        job.status = status;
      }
    },
    async inter_btn(id) {
      let status = "interview";
      let result2 = await axios.post(`${process.env.API_URL}/updateJobStatus`, {
        id,
        status,
      });
      console.log("result 2 :", result2);
      const job = this.allJobs.find(user => user._id === id);
      if (job) {
        job.status = status;
      }
    }
  }
}
</script>

<style scoped>
h2 {
  color: blue;
}

.job-list {
  list-style: none;
  padding: 0;
}

.job-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
}

.job-info {
  flex-grow: 1;
}

.job-actions {
  display: flex;
  gap: 10px;
}

.reject-btn {
  background-color: #e74c3c;
  color: white;
}

.hire-btn {
  background-color: #2ecc71;
  color: white;
}

.interview-btn {
  background-color: #3498db;
  color: white;
}
</style>
