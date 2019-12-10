<template>
  <div>
    <NavBar />

    <h1>{{ header }}</h1>
    <div class="grid_flow">
      <div v-for="item in setbooking" :key="item._id" class="booking_id">
        <p>Name: {{ item.name }}</p>
        <p>Phone number: {{ item.number }}</p>
        <p>Email: {{ item.email }}</p>
        <p>Date: {{ item.date }}</p>
        <p>Time: {{ item.time }}</p>
        <p>Treatment: {{ item.treatment }}</p>
        <p>Comment: {{ item.msg }}</p>
        <div class="d-flex justify-content-center">
          <router-link :to="{ name: 'edit', params: { id: item._id } }">
            <i
              aria-hidden="true"
              class="btn_edit fa fa-pencil-square-o mr-4"
            ></i>
          </router-link>
          <i
            type="submit"
            @click.prevent="delBookings(item._id)"
            class="btn_cancel fa fa-trash"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </div>

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
      header: "Booking Appointments"
    };
  },
  computed: {
    ...mapGetters(["setbooking"])
  },
  created() {
    this.BookingSum();
  },
  mounted() {
    this.BookingSum();
  },
  methods: {
    ...mapActions(["BookingSum", "delBookings"])
  }
};
</script>
<style scoped>
.grid_flow {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
i {
  font-size: 1.5rem;
}
.booking_id {
  background-color: rosybrown;
  background-image: url("../assets/images/Group.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 20px 0;
  border-radius: 20px;
  color: #fff;
  box-shadow: 10px 10px 8px #888888;
}
p {
  font-size: 18px;
  font-weight: 600;
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
  .grid_flow {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
}
</style>
