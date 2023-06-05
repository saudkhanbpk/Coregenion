<template>
<div class="main_class">

 <div class="nav">
 <div>
    <h2>Coregenion</h2>
  </div>
    
    <router-link to="/home">Home</router-link>
    <router-link to="/alljobs">All Jobs</router-link>
    <router-link to="/users">Users</router-link>
    <router-link to="/createjob">CreateJob</router-link>
    <router-link to="/">Register</router-link>
    <router-link to="/login">Login</router-link>
    
  </div>
  </div>
  

</template>
<script>
export default {
    name: 'HeaderComp'
}
</script>
<style scoped>
.nav{
background-color: #333;
overflow: hidden;
display: flex;
    align-items: center;
}
.nav a{
    float: left;
    color: white;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover{
background: #ddd;
color: #333;
}
h2{
    color:white;
        padding-right: 20px;
    padding-left: 20px;
}
</style>