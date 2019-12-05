<template>
  <div class="home">
    
    <div class="top_bar">
      <NavBar/>
      <div class="side_text">
        <h2>Experience the secret  of Relaxation</h2>
        <div>
          <button> <router-link :to="{ name: 'login' }">Book Now</router-link></button>
        </div>
      </div>
    </div>
    <mainPage/>
    <footer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import mainPage from '@/components/mainPage.vue'
import footer from '@/components/footer'

export default {
  name: 'home',
  components: { 
  mainPage,
  NavBar,
  footer
  }
}
</script>

<style scoped>
.top_bar {
  min-height:calc(120vh - 100px);
  background-image: url('../assets/images/bg1.jpg');
  background-size: cover;
  opacity: 0.7;
}
.side_text h2{
  color:black;
  font-size: 36px;
}
.side_text{
  width: 75%;
  padding-left: 40em;
  padding-top: 9rem;
}
.side_text button {
  margin-top: 1em;
  border: none;
  padding: 10px 30px;
background: rgb(2, 70, 19);
border-radius: 20px;

}
.side_text a{
color:#fff;
text-decoration: none;  

}
</style>