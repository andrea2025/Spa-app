<template>
  <div>
    <NavBar />

    <h1>{{ header }}</h1>
    <div class="grid_flow" >
      <div v-for="item in setbooking" :key="item._id">
        <p> Name: {{ item.name }}</p>
        <p>Phone number: {{ item.number }}</p>
        <p>Email: {{ item.email }}</p>
        <p>Date: {{ item.date }}</p>
        <p>Time: {{ item.time }}</p>
        <p>Treatment: {{ item.treatment }}</p>
        <p>Comment: {{ item.msg }}</p>
        <div class="d-flex justify-content-center">
  

  <i aria-hidden="true"   data-toggle="modal"  data-target="#exampleModalCenter" class="btn_edit fa fa-pencil-square-o mr-4"></i>
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Edit Appointment</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-group">
            <label for="date">Date</label>
            <input
              type="date"
              name="date"
              value="date"
              class="form-control"
              placeholder="date" v-model="editUser.date" />
          </div>
          <div class="form-group">
            <label for="time">Time</label>
            <input
              type="time"
              name="time"
              value="time"
              class="form-control"
              placeholder="time" v-model="editUser.time"/>
          </div>
          <div>
            <label for="sect">Treatment Selection</label>
            <select
              name="treatment"
              class="form-control"
              aria-placeholder="Spa treatment" v-model="editUser.treatment">
              <option value="massage">Massage</option>
              <option value="body treatment">body Treatment</option>
              <option value="facials">Facials</option>
              <option value="nail">nail removal</option>
              <option value="medical">Medical Treatment</option>
            </select>
          </div>
          <div>
            <label for="msg">Message</label>
            <textarea
              name="text"
              cols="10"
              rows="5"
              value="text"
              class="form-control"
              placeholder="drop your treatment specification"
              v-model="editUser.msg">
            </textarea>
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" @click.prevent="edit" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      <i
            type="submit"
            @click.prevent="delBookings(item._id)"
            class="btn_cancel fa fa-trash" aria-hidden="true"
          ></i>
        </div>
      
      </div>
    </div>

    <div></div>
    <footer1 />
  </div>
</template>
<script>
import footer1 from "@/components/footer1.vue";
import NavBar from "@/components/NavBar.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "bookingSum",
  components: {
    NavBar,
    footer1
  },
  data() {
    return {
      header: "Booking Appointments",
      editUser:{
        date:'',
        time:'',
        treatment:'',
        msg:''
      }
    };
  },
  computed: {
    ...mapGetters(["setbooking"])
  },
  created() {
    this.BookingSum();
  },
  methods: {
    ...mapActions(["BookingSum", "delBookings", 'updateBooking']),
    edit(){
    this.updateBooking(this.editUser)
    }
  }
};
</script>
<style scoped>
.grid_flow{
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
}
i {
  font-size: 3em;

}
.btn_edit {
  background: #ffffff;
  border-radius: 20px;
  padding: 0.3rem; 
  color: #000000;
  cursor: pointer;
}
.btn_edit:hover {
  color: #fff;
  background: rgb(2, 70, 19);
  border: 2px solid black;
}
.btn_cancel {
  background: #ffffff;
  border-radius: 30px;
  padding: 0.3rem;
  color: #000000;
  cursor: pointer;
}
.btn_cancel:hover {
  background: rgb(172, 46, 46);
  color: #fff;
}

@media screen and (max-width: 768px) {
.grid_flow{
  display: grid;
  grid-template-columns:repeat(2, 1fr);
  grid-gap: 20px;
}
}
</style>
