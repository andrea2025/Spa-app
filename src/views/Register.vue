<template>
  <div>
  
   

      <div class="bg_layer pt-5">
        <form @submit.prevent="sign" action="/register" method="post">
          <h1>Register</h1>
          <div class="form1">
            <label for="fullname">Fullname:</label><br />
            <input
              type="name"
              name="name"
              placeholder="Enter name"
              v-model="userRegister.name"
              required
            />
          </div>
          <div class="form1">
            <label for="Email" class=" form_email">Email:</label><br />
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              v-model="userRegister.email"
              required
            />
          </div>
          <div class="form1">
            <label for="password">Password:</label><br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              v-model="userRegister.password"
              required
            />
          </div>

          <div class="response">
            {{ apiResponse.message }}
          </div>
          <p class="mt-2">
            Already have an Account?
            <router-link :to="{ name: 'login' }">Login</router-link>
          </p>
          <button type="submit">Sign Up</button>
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
  name: "register",
  components: {
    
    footer1
  },
  data() {
    return {
      userRegister: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapGetters(["apiResponse"])
  },
  methods: {
    ...mapActions(["Register"]),
    sign() {
      this.Register(this.userRegister);
    }
  },
  watch: {
    apiResponse(val) {
      if (val.type == "success") {
        setTimeout(() => {
          this.$router.push({ name: "login" });
        }, 4000);
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
  font-weight:bold;
  margin-top: 1rem;

}
.response {
  color: mediumvioletred;
  font-size: 20px;
}

.form1 input {
  width: 25%;
   background: #fff;
  margin: 0 auto;
  padding: 0.3rem 0.8rem;
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
