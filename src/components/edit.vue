<template>
  <div class="edit">
    <NavBar/>
   <div class="edit_bar pt-5">
      <h1>Edit Appointment</h1>
    <div class="mt-3" >
      
      <div class="form-group">
        <label for="date">Date</label>
        <input
          type="date"
          name="date"
          value="date"
          class="form-control col-4"
          placeholder="date"
          v-model="editUser.date"
        />
      </div>
      <div class="form-group">
        <label for="time">Time</label>
        <input
          type="time"
          name="time"
          value="time"
          class="form-control col-4"
          placeholder="time"
          v-model="editUser.time"
        />
      </div>
      <div>
        <label for="sect">Treatment Selection</label>
        <select
          name="treatment"
          class="form-control col-4"
          aria-placeholder="Spa treatment"
          v-model="editUser.treatment"
        >
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
          class="form-control col-4"
          placeholder="drop your treatment specification"
          v-model="editUser.msg"
        >
        </textarea>
      </div>
    </div>
    <button type="submit" class="btn btn-dark mt-3" @click="edited">
      Save changes
    </button>
   </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
export default {
    name:"edit",
    components:{
      NavBar
    },
    data(){
        return{
             editUser:{
      date:'',
      time:'',
      treatment:'',
      msg:''
    }
        }
    },
    mounted(){
       this.$http.get(`https://http://localhost:3000/booking/${this.$route.params.id}`)
       .then(response => {
           this.editUser = response.data.data
       })
       .catch(error => {
           console.log(error.response)
       })
    },

    methods:{
         edited() {
            this.$http.put(`http://localhost:3000/booking/${this.$route.params.id}`, this.editUser)
            .then(response => {
                console.log(response)
                this.editUser = {

                          date:'',
                          time:'',
                          treatment:'',
                          msg:''

                }
                console.log('booking');
            })
            .catch(error => {
                console.log(error.response.message)
            })
            .finally(() => {
                this.$router.push({name: 'bookingSum'})
            })
        }
    }
    }


</script>

<style scoped>
input,
select,
textarea {
  margin: 0 auto;
}
.edit {
 
  background: rgb(241, 240, 236);
  padding: 2em;
  margin: 0 auto;
}
label{
  font-size: 20px;
  font-weight: 400;
}
/* .edit_bar{
   min-height: 700px;
  background: thistle;
 
  
} */
 
</style>
