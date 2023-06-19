<template>
  <div>
    <h2>Users Page</h2>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in allUsers" :key="user.id">
            <td>{{ user.fullName }}</td>
            <td>{{ user.status }}</td>
            <td>
              <button v-on:click="suspendUser(user._id)" class="action-button suspend-button">Suspend</button>
              <button v-on:click="confirmUser(user._id)" class="action-button confirm-button">Confirm</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AllJobsComp",
  data() {
    return {
      allUsers: []
    };
  },
  async mounted() {
    let result = await axios.get(`${process.env.API_URL}/getUsers`);
    console.log(result.data);
    this.allUsers = result.data;
  },
  methods: {
    async suspendUser(id) {
      let status = "Suspend";
      let result = await axios.post(`${process.env.API_URL}/updateUser`, {
        id,
        status
      });
      console.log("Result:", result);

      // Update the status in the component data
      const user = this.allUsers.find(user => user._id === id);
      if (user) {
        user.status = status;
      }
    },
    async confirmUser(id) {
      let status = "Confirmed";
      let result = await axios.post(`${process.env.API_URL}/updateUser`, {
        id,
        status
      });
      console.log("Result:", result);

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
h2 {
  color: blue;
}

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

.action-button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  color: white;
  cursor: pointer;
}

.suspend-button {
  background-color: #FF5252;
}

.confirm-button {
  background-color: #4CAF50;
}

@media (max-width: 480px) {
  th,
  td {
    font-size: 14px;
  }
}
</style>
