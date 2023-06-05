
import Register from "../src/components/Register.vue"
import Login from "../src/components/Login.vue"
import Home from "../src/components/Home.vue"
import AllJobs from "../src/components/AllJobs.vue"
import Users from "../src/components/Users.vue"
import CreateJob from "../src/components/CreateJob.vue"
// import {router} from "./Routers"
import {createRouter, createWebHashHistory} from "vue-router"
const routes = [
    { name:'Register', path: '/', component: Register },
    // { name:'Register', path: '/register', component: Register },
    { name:'Login', path: '/login', component: Login },
    { name:'Home', path: '/home', component: Home },
    { name:'AllJobs', path: '/alljobs', component: AllJobs },
    { name:'Users', path: '/users', component: Users },
    { name:'CreateJob', path: '/createjob', component: CreateJob },
  ];
  const router=createRouter({
    history:createWebHashHistory(),
    routes
  })
export default router;

