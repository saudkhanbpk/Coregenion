import Register from "../src/components/Register.vue"
import Login from "../src/components/Login.vue"
import Home from "../src/components/Home.vue"
import AllJobs from "../src/components/AllJobs.vue"
import Users from "../src/components/Users.vue"
import CreateJob from "../src/components/CreateJob.vue"
import AdminLogin from "../src/components/AdminLogin.vue"
import Dashboard from "../src/components/Dashboard.vue"
import Jobs from "../src/components/Jobs.vue"
import AppliedJob from "../src/components/AppliedJob.vue"
import { createRouter, createWebHashHistory } from "vue-router"

// Function to check if the user is authenticated
function checkIfUserIsAuthenticated() {
  const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
  return !!userDetails?.token; 
}

// Function to retrieve the user's role
function getUserRole() {
  const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
  return userDetails?.user?.role;
}

console.log("getUserRole",getUserRole())
const routes = [
  { name: 'Register', path: '/register', component: Register },
  { name: 'Login', path: '/', component: Login },
  { name: 'Home', path: '/home', component: Home, meta: { requiresAuth: true, requiresRole: ['User', 'Admin'] } },
  { name: 'AllJobs', path: '/alljobs', component: AllJobs, meta: { requiresAuth: true, requiresRole: ['User', 'Admin']  } },
  { name: 'Users', path: '/users', component: Users, meta: { requiresAuth: true, requiresRole: 'Admin' } },
  { name: 'CreateJob', path: '/createjob', component: CreateJob, meta: { requiresAuth: true, requiresRole: 'Admin' } },
  { name: 'AdminLogin', path: '/admin/login', component: AdminLogin },
  { name: 'Dashboard', path: '/admin/dashboard', component: Dashboard, meta: { requiresAuth: true, requiresRole: 'Admin' } },
  { name: 'AppliedJob', path: '/appliedJob', component: AppliedJob, meta: { requiresAuth: true, requiresRole: ['User', 'Admin'] } },
  { name: 'Jobs', path: '/Jobs', component: Jobs, meta: { requiresAuth: true, requiresRole: ['User', 'Admin'] } },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = checkIfUserIsAuthenticated() 
  const userRole = getUserRole()

  if (to.meta.requiresAuth) {
    
    if (!isAuthenticated) {
      
      next('/')
    } else if (
      to.meta.requiresRole &&
      !to.meta.requiresRole.includes(userRole)
    ) {
      // User role does not match the required role, redirect to the access denied page or another appropriate route
      next('/access-denied')
    } else {
      // User is authenticated and has the necessary role, proceed to the requested route
      next()
    }
  } else {
    // Route does not require authentication, proceed to the requested route
    next()
  }
})

export default router
