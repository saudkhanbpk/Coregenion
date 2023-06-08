<template>
<h2>Users Page</h2>
<table border="1">
      <thead>
        <tr>
          
          <th>jobTitle</th>
          
          <th>status </th>
          <!-- Add more table headers as needed -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="job in allUsers" :key="job.id">
          <td>{{ job.currentJobTitle }}</td>
          <td>{{ job.status }}
          <button v-on:click="sub_btn(job._id)">Suspend</button>
          <button v-on:click="conf_btn(job._id)">Confirm</button>
          </td>
          <!-- <td><button>{{ job.status }}</button></td> -->
          <!-- Add more table cells for other properties -->
        </tr>
      </tbody>
    </table>
</template>
<script>
import axios from "axios";
export default{
    name:"AllJobsComp",
     data() {
    return {
      allUsers: []
    };
  },
  async mounted() {
    let result = await axios.get(`${process.env.API_URL}/getUsers`);
    console.log(result.data)
    this.allUsers = result.data;
    // console.log(this.allUsers);
  },

   
 
   methods: {
    async sub_btn (id) {
        let status ="Suspend"
    //   return   console.log(status,_id)
   let result2= await axios.post(`${process.env.API_URL}/updateUser`,{
            
            id,
            status,
            

        })
        console.log("result 2 :",result2)
         // Update the status in the component data
      const user = this.allUsers.find(user => user._id === id);
      if (user) {
        user.status = status;
      }
    },
   async conf_btn (id) {
        let status ="Confirmed"
    //   return   console.log(status,_id)
   let result2= await axios.post(`${process.env.API_URL}/updateUser`,{
            
            id,
            status,
            

        })
        console.log("result 2 :",result2)
        
      // Update the status in the component data
      const user = this.allUsers.find(user => user._id === id);
      if (user) {
        user.status = status;
      }
    }
    }
}
</script>
<style scoped>
h2{
    color:blue
}
</style>