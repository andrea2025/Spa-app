<template>
  <div class="form_bar">
    <NavBar/>
    <div class="d-flex justify-content-between pb-3">
      <div>
       
        <form @submit.prevent="booked" action="/booking" method="post">
         <h1>Booking Enquiry</h1>
          <div class="form-group ">
            <label for="name"> Fullname:</label>
            <input
              type="name"
              name="name"
              value="name"
              class="form-control "
              placeholder="Name"
              v-model="user.name"
            />
          </div>
          <div class="form-group">
            <label for="number">Number</label>
            <input
              type="number"
              name="number"
              value="number"
              class="form-control"
              placeholder="Phone number"
              v-model="user.number"
            />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              name="email"
              value=" email"
              class="form-control"
              placeholder="Email"
              v-model="user.email"
            />
          </div>

          <h3 class="text-bold">Fix an Appointment</h3>
          <div class="form-group">
            <label for="date">Date</label>
            <input
              type="date"
              name="date"
              value="date"
              class="form-control"
              placeholder="date"
              v-model="user.date"
            />
          </div>
          <div class="form-group">
            <label for="time">Time</label>
            <input
              type="time"
              name="time"
              value="time"
              class="form-control"
              placeholder="time"
              v-model="user.time"
            />
          </div>
          <div>
            <label for="sect">Treatment Selection</label>
            <select
              name="treatment"
              class="form-control" aria-placeholder="Spa treatment"
              v-model="user.treatment"
            >
              
              <option value="massage">Massage</option>
              <option value="body treatment">body Treatment</option>
              <option value="facials">Facials</option>
              <option value="nail">nail removal</option>
              <option value="medical">Medical Treatment</option>
            </select>
          </div>
          <br />
          <div>
            <label for="msg">Message</label>
            <textarea
              name="text"
              cols="10"
              rows="5"
              value="text"
              class="form-control"
              placeholder="drop your treatment specification"
              v-model="user.text"
            >
              </textarea
            >
          </div>
          <button type="submit">Book appointment</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import { mapActions} from "vuex";
export default {
  name: "booking",
  components:{
    NavBar
  },
  data() {
    return {
      user: {
        name: "",
        number: "",
        email: "",
        date: "",
        time: "",
        treatment: "",
        text: ""
      },
      
    };
  },

  methods: {
    ...mapActions(["Booking" ,"BookingSum"]),
    booked() {
      this.Booking(this.user);
     
      
    }
  }
};
</script>

<style scoped>
*{
  box-sizing: border-box;
  display:block;
  margin: 1rem auto;
   
}
.form_bar{
background-image: url('../assets/images/bg1.jpg');
   color:#000;
}

form {
  width: 150%;
  height: auto;
  padding: 20px;
}
button {
  background: rgb(2, 70, 19);
  border-radius: 40px;
  border: none;
  padding: 0.8em 3em;
  color: white;
  cursor: pointer;
  margin: 1em auto;
  
}
label{
  text-align: left;
  font-weight:bolder;
}
button:hover{
 color:white;
 background: transparent;
 border: 2px solid black;
}

</style>
