<template>
  <div>
    
    <div class="bg_img">
   <NavBar/>
    </div>

    <div class="response" :class="[apiResponse ? apiResponse.type: '']" v-show="showResponse">
      {{ apiResponse.message}}
    </div>
    <form  @submit.prevent="sign" action="/register" method="post">
     <h1>Register</h1>
      <div class="form1">
        <label for="fullname">Fullname:</label><br>
        <input type="name" name="name"  placeholder="Enter name" v-model="userRegister.name" required/>
      </div>
      <div class="form1">
        <label for="Email" class=" form_email">Email:</label><br>
        <input type="email" name="email" placeholder="Enter email" v-model="userRegister.email" required/>
      </div>
      <div class="form1">
        <label for="password">Password:</label><br>
        <input type="password"  name="password" placeholder="Password" v-model="userRegister.password" required/>
      </div>
      <p class="form1">
        Already have an Account?
        <router-link :to="{ name: 'login' }">Login</router-link>
      </p>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import {mapActions,mapGetters} from 'vuex'
export default {
  name: "register",
  components:{
    NavBar
  },
  data(){
    return{
      userRegister:{
        name: '',
        email: '',
        password:''
      },
       showResponse: false
    }
  },
  computed:{
    ...mapGetters(["apiResponse"])
  },
methods:  {
  ...mapActions([
    'Register'
  ]),
  sign(){
    this.Register(this.userRegister)
  }
},
// watch: {
    
//     apiResponse(val) {
//       this.showResponse = val.message != '' ? true : false
//       if(val.type == 'success') {
//         setTimeout(()=> {this.$router.push({name: 'login'})}, 1000)
//       }
//     }
// }
}

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
