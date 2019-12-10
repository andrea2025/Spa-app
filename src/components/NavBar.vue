<template>
  <div class="Nav">
    <nav class="navigation">
      <div class="top_bar1">
        <router-link to="/"
          ><h1 class="logo">Andr@ <span> spa</span></h1></router-link
        >
      </div>

      <ul class="nav_list">
        <li class="nav_list_item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav_list_item">
          <router-link to="/bookingSum">Bookings</router-link>
        </li>
      </ul>
      <ul v-if="!userlogin" class="nav_list">
        <li class="nav_auth">
          <router-link :to="{ name: 'register' }"> Register</router-link>
        </li>
        <li class="nav_auth">
          <router-link :to="{ name: 'login' }"> Login </router-link>
        </li>
      </ul>
      <ul class="nav_auth" v-else>
        <a href="" @click="signOut">Logout</a>
      </ul>
    </nav>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapGetters(["userlogin"])
  },
  methods: {
    ...mapActions(["logout"]),
    signOut() {
      this.logout();
    }
  }
};
</script>
<style scoped>
a {
  color: inherit;
  text-decoration: none;
}

.navigation {
  box-shadow: 2px 4px 4px rgba(210, 105, 30, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 4.75rem;
  align-items: center;
}
.logo {
  font-size: 24px;
  font-weight: 800;
  color: rgb(236, 19, 200);
  text-decoration: none;
}
.nav_list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav_list li {
  margin: 0.5rem 1rem;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: border-bottom 500ms ease-in-out;
  
}
.nav_auth {
  background: linear-gradient(180deg, rgba(197, 177, 177, 0.2) 100%), #ea3cce;
  color: #fff;
  cursor: pointer;
  border-radius: 20px;
  padding: 0.4rem 0.8em;
}
.nav_auth:hover {
  background: linear-gradient(180deg, #c4a0a0 0%, rgba(255, 255, 255, 0) 100%),
    #ea3cce;
    color: rgb(2, 70, 19);
  
}
.nav_list_item {
  font-size: 20px;
  transform: translateX(30%);
}
.nav_list_item:hover {
  color: #ea3cce;
}
</style>
