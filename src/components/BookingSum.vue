<template>
  <div class="Summary">
    <div class="Nav">
      <nav class="navigation">
        <div class="top_bar1">
          <router-link to="/"
            ><h1 class="top_text">Andr@ <span> spa</span></h1></router-link
          >
        </div>
        <ul class="nav_list">
          <li class="nav_list_item item1">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav_list_item">
            <router-link to="/about">About</router-link>
          </li>
        </ul>
        <div class="nav_auth auth">
          <router-link :to="{ name: 'login' }"> Logout</router-link>
        </div>
      </nav>
    </div>
    <div class="d-flex justify-content-between">
      <div>
        <div>
          <h1>Booking Summary</h1>
          <router-view></router-view>
        </div>
        <div class="d-flex justify-content-center">
          <form action="" method="get">
            <button type="submit" class="btn_edit">Edit</button>
          </form>
          <form action="" method="get">
            <button type="submit" @click.prevent="del" class="btn_cancel">
              Cancel
            </button>
          </form>
        </div>
      </div>

      <form action="" method="get">
        <div class="container">
        <i
          class="fa fa-plus-circle"
          aria-hidden="true"
          data-toggle="modal"
          data-target="#myModal"
        ></i>
        
        <div class="modal fade" id="myModal" role="dialog">
          <div class="modal-dialog">
           
            <div class="modal-content">
              <div class="modal-body">
                <h3 class="text-bold">Fix an Appointment</h3>
                <div class="form-group">
                  <input
                    type="date"
                    name="date"
                    class="form-control"
                    placeholder="date"
                    v-model="user.date"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="time"
                    name="time"
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
                    class="form-control"
                    v-model="user.text"
                  >
                message</textarea
                  >
                </div>
                <button type="submit" class="btn_add">Add appointment</button>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </form>
      
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Summary",
  data() {
    return {
      user: {
        date: "",
        time: "",
        treatment: "",
        text: " "
      }
    };
  },
  methods: {
    ...mapActions(["BookingSum"]),
    del() {}
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
i {
  font-size: 7em;
}
.btn_edit {
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    #ea3cce;
  border-radius: 20px;
  border: none;
  padding: 1em 3em;
}
.btn_edit:hover {
  background: linear-gradient(rgba(255, 255, 255, 0) 100%), #ea3cce;
}
.btn_cancel {
  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 20px;
  padding: 1em 2em;
  margin-left: 3em;
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
  color:white;
   cursor: pointer;
   margin-top: 1.5em;
   margin-right: 1em;
}
.btn_add:hover{
 background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    rgb(2, 70, 19);
}
</style>
