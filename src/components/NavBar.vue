<template>
  <div class="Nav">
    <nav class="navigation">
      <div class="top_bar1">
        <router-link to="/"
          ><h1>Andr@ <span> spa</span></h1></router-link>
      </div>
      <ul class="nav_list">
            <li class="nav_list_item item1">
            <router-link to="/">Home</router-link>
            </li>
            <li class="nav_list_item">
            <router-link to="/bookingSum">Bookings</router-link>
            </li>
      </ul>
      <ul v-if="!userlogin" class="d-flex mx-2">
        <li class="nav_auth auth">
          <router-link :to="{ name: 'register' }"> Register</router-link>
        </li>
        <li class="nav_auth">
          <router-link :to="{ name: 'login' }"> Login </router-link>
        </li>
      </ul>
      <ul class="nav_auth" v-else>
        <a href="#" @click="signOut">Logout</a>
      </ul>
    </nav>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: "NavBar",
  computed:{
      ...mapGetters(['userlogin'])
  },
   methods: {
    ...mapActions(['logout']),
    signOut(){
      this.logout()
      
    }

  }
};
</script>
<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
h1 {
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
.top_bar1 span {
  color: #fff;
}
.nav_list {
  display: flex;
  list-style: none;
}
.nav_list_item {
  margin: 0 5em;
}
li{
    list-style: none;
}
.auth {
  margin-right: 7em;
}
.nav_auth {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 100%), #ea3cce;
  color: #fff;
  cursor:pointer;
  border-radius: 20px;
  padding: 0.8em 1.5em;
}
.nav_auth:hover {
  background: linear-gradient(180deg, #c4a0a0 0%, rgba(255, 255, 255, 0) 100%),
    #ea3cce;
}
 @media screen and (max-width: 768px) {
  .nav_auth{
    display: flex;
  }
  }
</style>
