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
          <td>{{ job.status }}
          <button v-on:click="rej_btn(job._id)">Reject</button>
          <button v-on:click="hire_btn(job._id)">Hire</button>
          <button v-on:click="inter_btn(job._id)">Interview</button>
          </td>
          
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
    let result = await axios.get(`${process.env.API_URL}/getJobs`);
    // console.log(result.data)
    this.allJobs = result.data;
    console.log(this.allJobs);
  },
  methods: {
    async rej_btn (id) {
        let status ="rejected"
      // return   console.log(status,_id)
   let result2= await axios.post(`${process.env.API_URL}/updateJobStatus`,{
            
            id,
            status,
            

        })
        console.log("result 2 :",result2)
         // Update the status in the component data
      const Jobs = this.allJobs.find(user => user._id === id);
      if (Jobs) {
        Jobs.status = status;
      }
    },
   async hire_btn (id) {
        let status ="hire"
    //   return   console.log(status,_id)
   let result2= await axios.post(`${process.env.API_URL}/updateJobStatus`,{
            
            id,
            status,
            

        })
        console.log("result 2 :",result2)
        
      // Update the status in the component data
      const Jobs = this.allJobs.find(user => user._id === id);
      if (Jobs) {
        Jobs.status = status;
      }
    },
   async inter_btn (id) {
        let status ="interview"
      
   let result2= await axios.post(`${process.env.API_URL}/updateJobStatus`,{
            
            id,
            status,
            

        })
        console.log("result 2 :",result2)
        
      // Update the status in the component data
      const Jobs = this.allJobs.find(user => user._id === id);
      if (Jobs) {
        Jobs.status = status;
      }
    }
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
