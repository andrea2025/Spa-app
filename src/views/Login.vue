<template>
  <div>
    
    

      <div class="mx-auto pt-5">
        <form @submit.prevent="log" action="/login" method="post">
          <h1>Member Login</h1>
          <div class="form1">
            <label for="Email">Email:</label><br />
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              v-model="userLogin.email"
            />
          </div>
          <div class="form1">
            <label for="password">Password:</label><br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              v-model="userLogin.password"
            />
          </div>
          <div class="response">{{ apiResponseLog.message }}</div>
          <p class="mt-2">
            Don’t have an account?
            <router-link :to="{ name: 'register' }">Sign Up</router-link>
          </p>
          <button type="submit">Login</button>
        </form>
      </div>
    
    <footer1 />
  </div>
</template>

<script>
import footer1 from "@/components/footer1.vue";
//import NavBar from "@/components/NavBar.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "login",
  components: {
   
    footer1
  },
  data() {
    return {
      userLogin: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapGetters(["apiResponseLog"])
  },
  methods: {
    ...mapActions(["Login"]),
    log() {
      this.Login(this.userLogin);
    }
  },
  watch: {
    apiResponseLog(val) {
      if (val.type == "success") {
        setTimeout(() => {
          this.$router.push({ name: "booking" });
        }, 2000);
      }
    }
  }
};
</script>

<style scoped>
* {
  background: #eeeaea;
  box-sizing: border-box;
}

img {
  height: 550px;
}
button {
  background: rgb(2, 70, 19);
  border-radius: 40px;
  border: none;
  padding: 0.6em 2em;
  color: white;
  cursor: pointer;
  margin-right: 1.5em;
}
button:hover {
  color: rgb(2, 70, 19);
  background: transparent;
  border: 2px solid black;
}
.form1 label {
  font-size: 15px;
  font-weight: bold;
  margin-top: 1rem;
}
.response {
  color: mediumvioletred;
  font-size: 20px;
}
.form1 input {
  background: #fff;
  width:25%;
  padding: 0.3rem 0.6rem;
  border: 2px solid #000000;
  border-radius: 200px;
  font-size: 16px;
  margin-top: 0.5rem;
  display: inline-block;
}
p {
  text-align: center;
}
</style>
