<template>
  <div class="main_class">
    <div class="nav">
      <div>
        <h2>Coregenion</h2>
      </div>

      <router-link to="/home">Home</router-link>
      <!-- <router-link to="/alljobs">All Jobs</router-link> -->
      <!-- <router-link to="/appliedjob">Applied Jobs</router-link> -->
      <router-link to="/Jobs">Jobs</router-link>
      <router-link v-if="isAdminRole" to="/users">Users</router-link>
      <router-link v-if="isAdminRole" to="/createjob">CreateJob</router-link>
      <router-link v-if="!isLoggedIn" to="/">Login</router-link>
      <router-link v-if="isLoggedIn" to="/logout" @click="logout">Logout</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',
  computed: {
    isAdminRole() {
      const getUserRole = () => {
        const user = JSON.parse(localStorage.getItem('userDetails'));
        if (user && user.user?.role) {
          return user?.user?.role;
        }
        return 'User';
      };

      const userRole = getUserRole();
      return userRole === 'Admin';
    },
    isLoggedIn() {
    
      const user = JSON.parse(localStorage.getItem('userDetails'));
      return user !== null;
    },
  },
  methods: {
    logout() {
     
      localStorage.removeItem('userDetails');
      
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.nav {
  background-color: #333;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.nav a {
  float: left;
  color: white;
  padding: 14px 16px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
}
.nav a:hover {
  background: #ddd;
  color: #333;
}
h2 {
  color: white;
  padding-right: 20px;
  padding-left: 20px;
}
</style>
