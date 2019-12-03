<template>
  <div>
    <div class="bg_img">

    </div>
    <h1>Sign Up</h1>
    <form action="/register" method="post">
      <div class="form-group">
        <label for="fullname">Fullname :</label>
        <input type="name" class="form-control" placeholder="Enter name" />
      </div>
      <div class="form-group">
        <label for="Email" class=" form_email">Email :</label>
        <input type="email" class="form-control " placeholder="Enter email" />
      </div>
      <div class="form-group">
        <label for="password">Password :</label>
        <input type="password" class="form-control" placeholder="Password" />
      </div>
      <p>
        Already have an Account?
        <router-link :to="{ name: 'login' }">Login</router-link>
      </p>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "register"
};
</script>

<style scoped>
* {
  background: #f4eded;
}
.bg_img{
  background-image: url("../assets/images/bg1.jpg");
   min-height: calc(100vh - 100px);
        background-size: cover;
}
form {
  width: 50%;
  height: auto;
  margin: 50px auto 0;
  padding: 50px;
}
button {
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    rgba(232, 145, 43, 0.7);
  border-radius: 40px;
  border: none;
  padding: 1em 3em;
}
label {
  font-size: 15px;
  font-weight: 700;
  padding-right: 31em;
}
.form_email{
  padding-right: 33em;
}
input {
  background: rgba(252, 249, 247, 0.7);
  opacity: 0.7;
  border: 2px solid #000000;
  padding: 10px;
  border-radius: 200px;
}
p {
  text-align: left;
}
</style>
