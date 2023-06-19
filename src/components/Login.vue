<template>
    <div class="login-box">
    
        <div class="center-align">
        </div>
        <h4>LOGIN</h4>
        <div class="alert alert-warning" v-if="error != null">
      <span style="color: red;" >{{ error }}</span>
    </div>
        
        <form class="form-group">
            <div class="input-field">
                <label for="email">Email</label>
                <input id="" type="email" class="form-control" v-model="email" required>
            </div>
            <div class="input-field">
                <label for="password">Password</label>
                <input id="password" type="password" class="form-control" v-model="password" required>
            </div>
            <div class="center-align">
                <br/>
                <button v-on:click="login()" class="btn btn-default btn-large">login</button>
                <hr/>
                <p>Don't have an account? - <router-link to="/register">Register Now</router-link></p> 
            </div>
        </form>
    </div>
  
</template>
<script>
import axios from "axios"
export default {
    
  name: 'LoginComp',
  data () {
    return {
      email: '',
      password: '',
      error: null,
      loading: false
    }
  },
  mounted() {
  console.log("fhjshafhasj", process.env.API_URL)
},
  methods: {
    
    async login() {
      try {
        const response = await axios.post(`${process.env.API_URL}/login`, {
          email: this.email,
          password: this.password,
        });
        console.log(response.data);

        if (response.status === 200) {
          const userDetails = response.data;
          console.log("userDetails", userDetails)
          localStorage.setItem('userDetails', JSON.stringify(userDetails));
// location.reload();
          if (userDetails.user.role === "Admin") {
            alert("Admin login successful");
            this.$router.push({ name: "Dashboard" });
            
          } else {
            alert("User login successful");
            this.$router.push({ name: "Home" });
          }
        }

        console.log("hhhhhhh", response)
      } catch (error) {
        console.log(error);
        if (error.response && error.response.data && error.response.data.msg) {
          this.error = error.response.data.msg;
          // alert(error.response.data.msg)
        } else if (error.response && error.response.data) {
          this.error = error.response.data;
          
        } else {
          this.error = "An error occurred during login. Please try again.";
        }
      }
      
    },
    
  },
  
}
</script>
<style scoped>
h4 {
    text-align: center;
    margin: 0;
    padding: 0;
    font-weight: 800;
    font-size: 18px;
}
p {
    text-align: center;
    font-size: 14px;
    padding-bottom: 10px;
}
.login-box {
    width: 350px;
    height: auto;
    background-color: white;
    border-radius: 5px;
    padding: 40px;
    margin: auto;
    margin-top: 60px;
    border: 1px solid #E4E6E7;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.4);
}
.input-field{
    display: flex;
    flex-direction: column;
    align-items: start;
    height: 70px;
}
.form-control{
    width: 98%;
    height: 35px;
}
button {
    margin: auto;
    background-color: #327dfa;
    margin: 0;
    width: 100%;
    height: 30px;
    border: none;
    color: white;
    font-size: 18px;
}
button i {
    font-size: 18px;
}
</style>