<template>
  <div>
    <NavBar/>
    <div class="d-flex justify-content-between">
      <div>
        <h1>Booking Enquiry</h1>
        <form @submit.prevent="booked" action="/booking" method="post">
          <div class="form-group ">
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
            <select
              name="treatment"
              class="form-control"
              v-model="user.treatment"
            >
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
            <textarea
              name="text"
              cols="10"
              rows="5"
              value="text"
              class="form-control"
              v-model="user.text"
            >
                message</textarea
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

  // computed: {
  //   ...mapGetters(["currentbooking"])
  // },
  methods: {
    ...mapActions(["Booking"]),
    booked() {
      this.Booking(this.user);
      // .
    }
  }
};
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
.top_text {
  color: rgb(236, 19, 200);
}
.item1 {
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
.nav_list_item {
  margin: 0 5em;
}
.auth {
  margin-left: 9em;
}
.nav_auth {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 100%), #ea3cce;
  color: #fff;

  border-radius: 20px;
  padding: 0.8em 1.5em;
}
.nav_auth:hover {
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    #ea3cce;
}
form {
  width: 150%;
  height: auto;
  margin: 50px auto 0;
  padding: 50px;
}
button {
  background: rgb(2, 70, 19);
  border-radius: 40px;
  border: none;
  padding: 0.8em 3em;
  color: white;
  cursor: pointer;
  margin-top: 1.5em;
  margin-right: 1em;
}
button:hover {
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    rgb(2, 70, 19);
}

i {
  font-size: 4em;
  padding-bottom: 3em;
}
.btn_edit {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 100%), #ea3cce;
  border-radius: 20px;
  border: none;
  padding: 1em 3em;
}
.btn_edit:hover {
  background: linear-gradient(#ffffff 0%, rgba(255, 255, 255, 0) 100%), #ea3cce;
}
.btn_cancel {
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 20px;
  padding: 1em 2em;
  margin-left: 3em;
  margin-bottom: 3em;
  color: #000000;
}
.btn_cancel:hover {
  background: rgb(172, 46, 46);
  color: #fff;
}
.btn_add {
  background: rgb(2, 70, 19);
  border-radius: 40px;
  border: none;
  padding: 0.8em 3em;
  color: white;
  cursor: pointer;
  margin-top: 1.5em;
  margin-right: 1em;
}
.btn_add:hover {
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    rgb(2, 70, 19);
}
</style>
