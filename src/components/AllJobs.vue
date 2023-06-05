<template>
  <div>
    <h2>All jobs</h2>
    <table border="1">
      <thead>
        <tr>
          
          <th>jobTitle</th>
          <th>jobDescription</th>
          <th>jobLocation </th>
          <th>status </th>
          <!-- Add more table headers as needed -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="job in allJobs" :key="job.id">
          <td>{{ job.jobTitle }}</td>
          <td>{{ job.jobDescription }}</td>
          <td>{{ job.jobLocation }}</td>
          <td>{{ job.status }}</td>
          <!-- Add more table cells for other properties -->
        </tr>
      </tbody>
    </table>
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
    let result = await axios.get("http://localhost:5000/api/getJobs");
    // console.log(result.data)
    this.allJobs = result.data;
    console.log(this.allJobs);
  }
}
</script>

<style scoped>
h2 {
  color: blue;
}

table {
  width: 100%;
  border-collapse: collapse;
}
td{
    width:160px;
    height:40px
}

</style>
