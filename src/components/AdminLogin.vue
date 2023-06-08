<template>
    <div class="login-box">
        <div class="center-align">
        </div>
        <h4>ADMIN LOGIN</h4>
        <div class="alert alert-warning" v-if="error != null"><span class="white-text">{{ error.message }}</span></div>
        
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
                <p>Don't have an account? - <router-link to="/">Register Now</router-link></p> 
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
  methods: {
    async login () {
        let result = await axios.post(`${process.env.API_URL}/login`,{
            
            email: this.email,
            password: this.password,
            

        })
        console.log(result)
        if(result.status==200)
        {
            alert("User registered successfully")
            this.$router.push({name: "Home"})
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