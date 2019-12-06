<template>
  <div>
    <div class="bg_img">
     <NavBar/>
    </div>
   
   
    <form  @submit.prevent="log" action="/login" method="post">
       <h1>Member Login</h1>
      <div class="form1">
        <label for="Email" >Email:</label><br>
        <input type="email" name="email"  placeholder="Enter email" v-model="userLogin.email"/>
      </div>
      <div class="form1">
        <label for="password">Password:</label><br>
        <input type="password" name="password"  placeholder="Password" v-model="userLogin.password"/>
      </div>
      <p>
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
  background: #eeeaea;
  box-sizing: border-box;
}
.bg_img{
  background-image: url("../assets/images/bg1.jpg");
   min-height: calc(100vh - 100px);
        background-size: cover;
}

.form1{
  margin: 1rem 0;
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
 color:rgb(2, 70, 19);
 background: transparent;
 border: 2px solid black;
}
.form1 label {
  font-size: 15px;
  font-weight: 700;

}

 .form1 input {
width: 30%;
  padding: 0.5rem;
  border: 2px solid #000000;
  border-radius: 200px;
  font-size: 16px;
  margin-top: 0.5rem;
  display: inline-block;
 }
p {
  text-align: center;
}
@media screen and (max-width: 768px) {
  .form1 input{
    width:100%;
  }
}
</style>
