<template>
  <div>
    <NavBar/>
    <div class="form_bar pt-4 d-flex" >
    <img src="../assets/images/hhh.jpg" alt="">
    <div class="d-flex">
      <div>
        <form @submit.prevent="booked" action="/booking" method="post">
          <h1 class="">Booking Enquiry</h1>
          <div class="form-group ">
            <label for="name"> Fullname:</label>
            <input
              type="name"
              name="name"
              value="name"
              class="form-control "
              placeholder="fullname"
              v-model="user.name"
            />
          </div>
          <div class="d-flex mt-2 ">
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
          <div class="form-group ml-3">
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
          </div>
        <div class="d-flex mt-2 ">
          
          <div class="form-group item">
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
          <div class="form-group items">
            <label for="time">Time</label>
            <input
              type="time"
              name="time"
              value="time"
              class="form-control "
              placeholder="time"
              v-model="user.time"
            />
          </div>
          
        </div>
          <div class="mt-2">
            <label for="sect">Treatment Selection</label>
            <select
              name="treatment"
              class="form-control"
              v-model="user.treatment"
            >
              <option value="#">Choose treament...</option>
              <option value="massage">Massage</option>
              <option value="body treatment">Body treatment</option>
              <option value="facials">Facials</option>
              <option value="nail">Nail removal</option>
              <option value="medical">Medical treatment</option>
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
              v-model="user.msg"
            >
            </textarea>
          </div>
          <button type="submit">Book appointment</button>
        </form>
        <div class="response">{{ apiResponseBooked.message }}</div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "booking",
  components: {
    NavBar
  },
  data() {
    return {
      user: {
        name: " ",
        number: "",
        email: "",
        date: "",
        time: "",
        treatment: "",
        msg: ""
      }
    };
  },
  computed: {
    ...mapGetters(["apiResponseBooked"])
  },
  methods: {
    ...mapActions(["Booking", "BookingSum"]),
    booked() {
      this.Booking(this.user);
    }
  },
  watch: {
    apiResponseBooked(val) {
      if (val.type == "success") {
        setTimeout(() => {
          this.$router.push({ name: "bookingSum" });
        }, 2000);
      }
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  
}
img{
  width: 40%;
}

input::placeholder{
  background: rgba(252, 249, 247, 0.7);
opacity: 0.7;

}
input,textarea,select{
  border: 1px solid black;
}
.response {
  color: mediumvioletred;
  font-size: 20px;
}
.items{
  transform: translateX(-50%);
  
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
label {
  text-align: left;
  font-weight: bolder;
  
  color:#000;
}
button:hover {
  color: #2c3e50;
  background: transparent;
  border: 2px solid black;
}
.item{
  margin-right: 6em;
}
@media screen  and (max-width: 768px) {
  img{
    display:none;
  }
}
</style>
