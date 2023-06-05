<template>

<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
<HelloWorld msg="Welcome to Your Vue.js App" />
<!-- <Home/> -->
<!-- <Register/> -->
<!-- <Login/>
<Navbar /> -->
<Header/>
<router-view />

<!-- <Register/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue'
// import Register from './components/Register.vue'
// import Login from './components/Login.vue'
// import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'

export default {
    name: 'App',
    components: {
        Header,
        // HelloWorld,
        // Home,
        // Register
        // Login,
        // Navbar
        
    }
}
</script>

<style>
body{
    padding:0;
    margin: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
   
}
</style>
