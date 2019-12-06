<template>

  <div>
    <NavBar/>
    
    <h1>{{header}}</h1>
    <table  class="table table-dark">
      <tr>

        <th scope="col">Name</th>
        <th scope="col">Phone number</th>
        <th scope="col">Email</th>
        <th scope="col">Date</th>
        <th scope="col">Time</th>
        <th scope="col">Treatment</th>
        <th scope="col">Message</th>
        <th scope="col">Edit Appointement</th>
        <th scope="col">Delete Appointment</th>
      </tr>
      <tr v-for= "item in setbooking" :key="item._id"  scope="row">
        <td>{{item.name}}</td>
        <td>{{item.number}}</td>
        <td>{{item.email}}</td>
        <td>{{item.date}}</td>
        <td>{{item.time}}</td>
        <td>{{item.treatment}}</td>
        <td>{{item.text}}</td>
        <td>
          
          <button type="submit"  @click.prevent= "edit" class="btn_edit">Edit</button></td>
        <td><button type="submit" @click.prevent="delBookings(item._id)" class="btn_cancel">
                Cancel
              </button></td>
      </tr>
    </table>
    <div>
        </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import {mapActions, mapGetters} from 'vuex'
export default {
  name:'bookingSum',
  components:{
    NavBar
  },
  data(){
    return{
      header:'Booking Appointments'
    }
  },
  computed:{
    ...mapGetters(['setbooking'])
     
  },
  created(){
    this.BookingSum()
  },
  methods:{
    ...mapActions(['BookingSum' ,'delBookings'])
 
  }
  }
 



</script>
<style scoped>


i {
  font-size: 4em;
  padding-bottom: 3em;
}
.btn_edit {
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 20px;
  padding: 1rem 1.5rem;
  margin-left: 3em;
  margin-bottom: 3em;
  color: #000000;
  cursor: pointer;
}
.btn_edit:hover {
  color:#fff;
 background:rgb(2, 70, 19);
 border: 2px solid black;
}
.btn_cancel {
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 20px;
  padding: 1rem 1.5rem;
  margin-left: 3em;
  margin-bottom: 3em;
  color: #000000;
  cursor: pointer;
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
@media screen and (max-width: 768px) {
  table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 50%;
}

td, th {
  padding: 3px;
}
}
</style>