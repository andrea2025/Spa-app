<template>
  <div>
   <div class="Nav">
       <nav class="navigation">
            <div class="top_bar1">
            <router-link to="/"><h1 class="top_text">Andr@ <span> spa</span></h1></router-link> 
        </div>
        <ul class="nav_list">
            <li class="nav_list_item item1"><router-link to="/">Home</router-link></li>
            <li class="nav_list_item"> <router-link to="/about">About</router-link></li>
        </ul>
        <div class="nav_auth auth">
        <router-link :to="{name:'login'}"> Logout</router-link>
      </div>
       </nav>
    </div>
   <h1>Booking Enquiry</h1>
    <form  @submit.prevent ="booked" action="/booking" method="post">
     
      <div class="form-group">
        <input type="name" name="name" class="form-control " placeholder="Name" v-model="user.name" />
      </div>
      <div class="form-group">
        <input type="number" name="number" class="form-control" placeholder="Phone number" v-model="user.number"/>
      </div>
      <div class="form-group">
        <input type="email" name="email" class="form-control" placeholder="Email" v-model="user.email"/>
      </div>

      <h3 class="text-bold">Fix an Appointment</h3>
      <div class="form-group">
        <input type="date" name="date" class="form-control" placeholder="date" v-model="user.date"/> 
      </div>
      <div class="form-group">
        <input type="time" name="time" class="form-control" placeholder="time"  v-model="user.time"/>
      </div>
      <div>
        <select name="treatment" class="form-control" v-model="user.treatment">
          <option value="#" selected>Treatment selection</option>
          <option value="massage">Massage</option>
          <option value="body trt">body Treatment</option>
          <option value="facials">Facials</option>
          <option value="nail">nail removal</option>
          <option value="medical">Medical Treatment</option>
        </select>
      </div>
      <br />
      <div>
        <textarea name="text" cols="10" rows="5" class="form-control" v-model="user.text">
                message</textarea
        >
      </div>
      <button type="submit">Book appointment</button>
    </form>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: "booking",
data(){
  return{
user:{
  name:'',
  number:'',
  email:' ',
  date:'',
  time:'',
  treatment:'',
  text:' '

}
  }
},
methods:{
  ...mapActions([
    'Booking'
  ]),
  booked(){
    this.Booking(this.user)
  }
}
};
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
.top_text{
    color: rgb(236, 19, 200);
}
.item1{
    margin-right: 3em;
}
.navigation {
  display: flex;
  justify-content: space-between;
  padding: 2em 3em;
  color: rgb(236, 19, 200);
  align-items: center;
  font-weight: bolder;
}
.nav_list {
  display: flex;
  list-style: none;
}
.nav_list_item{
    margin: 0 5em;
}
.auth{
    margin-left: 9em;
}
.nav_auth {
     background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 100%), #EA3CCE;
     color: #fff;
    
border-radius: 20px;
padding: 0.8em 1.5em;
}
.nav_auth:hover {
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #EA3CCE;

}
form {
  width: 50%;
  height: auto;
  margin: 50px auto 0;
  padding: 50px;
}
button {
  background: rgb(2, 70, 19);
  border-radius: 40px;
  border: none;
  padding: 0.8em 3em;
  color:white;
   cursor: pointer;
   margin-top: 1.5em;
   margin-right: 1em;
}
button:hover{
 background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    rgb(2, 70, 19);
}
</style>
