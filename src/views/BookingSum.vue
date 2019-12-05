<template>
  <div>
    <p>{{item}}</p>
    <h1>{{header}}</h1>
    <table>
      <tr>
        <th>name</th>
        <th>phone number</th>
        <th>email</th>
        <th>date</th>
        <th>time</th>
        <th>treatment</th>
        <th>text</th>
      </tr>
      <tr v-for= "item in setbooking" :key="item._id" >
        <td>{{item.name}}</td>
        <td>{{item.number}}</td>
        <td>{{item.email}}</td>
        <td>{{item.date}}</td>
        <td>{{item.time}}</td>
        <td>{{item.treatment}}</td>
        <td>{{item.text}}</td>
      </tr>
    </table>
    <div>
          <!-- <div class="d-flex justify-content-center">
            <form action="" method="get">
              <button type="submit" class="btn_edit">Edit</button>
            </form>
            <form action="" method="get">
              <button type="submit" @click.prevent="del" class="btn_cancel">
                Cancel
              </button>
            </form>
          </div> -->
        </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name:'bookingSum',
  data(){
    return{
      header:'Booking Appointments'
    }
  },
  computed:{
    ...mapGetters(['setbooking'])
  },
  methods:{
    ...mapActions(['BookingSum'])
    
  }


}
</script>