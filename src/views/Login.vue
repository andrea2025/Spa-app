<template>
  <div>
    <div class="bg_img">
     <NavBar/>
    </div>
   
   
    <form  @submit.prevent="log" action="/login" method="post">
       <h1>Member Login</h1>
      <div class="form-group form1">
        <label for="Email" class=" form_email">Email:</label>
        <input type="email" name="email" class="form-control " placeholder="Enter email" v-model="userLogin.email"/>
      </div>
      <div class="form-group form1">
        <label for="password">Password:</label>
        <input type="password" name="password" class="form-control" placeholder="Password" v-model="userLogin.password"/>
      </div>
      <p class="form1">
        Don’t have an account?
        <router-link :to="{ name: 'register' }">Sign Up</router-link>
      </p>
      <button type="submit">Login</button>
    </form>
  </div>


</template>

<script>
import NavBar from '@/components/NavBar.vue'
import {mapActions} from 'vuex'
export default {
  name: "login",
  components:{
NavBar
  },
  data(){
     return{
      userLogin:{
         email:'',
    password: ''
      }
     }
  },
      methods:{
     ...mapActions([
    'Login'
  ]),
  log(){
    this.Login(this.userLogin)
  }

  }
};
</script>

<style scoped>
* {
  background: #f4eded;
}
.bg_img{
  background-image: url("../assets/images/bg1.jpg");
   min-height: calc(100vh - 100px);
        background-size: cover;
}
form {
  width: 60%;
  margin: auto ;
  padding: 50px;
}
.form1{
  margin-left: 13em;
}
button {
  background: rgb(2, 70, 19);
  border-radius: 40px;
  border: none;
  padding: 0.8em 3em;
  color:white;
   cursor: pointer;
   margin-right: 1.5em;
}
button:hover{
 background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    rgb(2, 70, 19);
}
label {
  font-size: 15px;
  font-weight: 700;
  padding-right: 31em;
}
.form_email{
  padding-right: 33em;
}
input {
  width: 50%;
  opacity: 0.7;
  border: 2px solid #000000;
   padding: 1rem;
  border-radius: 200px;
}
p {
  text-align: left;
}
</style>
