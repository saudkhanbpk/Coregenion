<template>
  <div>
    <h2>All Jobs</h2>
    
    <div class="card" v-for="job in allJobs" :key="job.id">
      <div class="card-content">
        <h3>{{ job.jobTitle }}</h3>
        <button class="apply-button">Apply</button>
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
      allJobs: []
    };
  },
  async mounted() {
    let result = await axios.get(`${process.env.API_URL}/getJobs`);
    this.allJobs = result.data;
    console.log(this.allJobs);
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
