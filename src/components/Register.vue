<template>
    <div class="login-box">
        <h4>Register</h4>
        <hr/>
        <div class="alert alert-warning" v-if="error != null"><span class="white-text">{{ error.message }}</span></div>
        <p>Don't have an account? Register for one now</p>
         <form class="form-group">
            <div class="input-field">
                <label for="fullName">FullName</label>
                <input id="fullName" type="text" class="form-control" v-model="fullName" required>
            </div>
            <div class="input-field">
                <label for="email">Email</label>
                <input id="email" type="text" class="form-control" v-model="email" required>
            </div>
            <div class="input-field">
                <label for="phone">Phone</label>
                <input id="" type="text" class="form-control" v-model="phone" required>
            </div>
            <div class="input-field">
                <label for="password">Password</label>
                <input id="password" type="password" class="form-control" v-model="password" required>
            </div>
            <div class="input-field">
                <label for="currentJobTitle">CurrentJobTitle</label>
                <input id="" type="text" class="form-control" v-model="currentJobTitle" required>
            </div>
            <div class="input-field">
                <label for="address">Address</label>
                <input id="" type="text" class="form-control" v-model="address" required>
            </div>
            <div class="center-align">
               
                <button v-on:click="authenticate()" class="btn btn-primary btn-large">Register</button>
                
                <p>Already have an account? - <router-link to="/">Login Now</router-link></p> 
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'RegisterComp',
  data() {
      return {
          fullName: '',
          email: '',
          phone: '',
          password: '',
          currentJobTitle: '',
          address: '',
          error: null
      }
  },
  methods: {
    async authenticate()
    {
        // console.log("signup", this.username, this.email, this.pass)
        let result = await axios.post(`${process.env.API_URL}/register`,{
            fullName:this.fullName,
            phone: this.phone,
            email: this.email,
            password: this.password,
            currentJobTitle: this.currentJobTitle,
            address: this.address,

        })
        console.log(result)
        if(result.status==201)
        {
            alert("User registered successfully")
            this.$router.push({name: "Login"})
        }
    }
  }
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
    width: 450px;
    height: auto;
    background-color: white;
    margin-top: 60px;
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
</style>