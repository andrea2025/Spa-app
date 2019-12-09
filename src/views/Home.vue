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
    <div class="mainPage">
        
    <div class="About_page d-flex justify-content-around">
      <div>
        <img src="../assets/images/about.jpg" alt="Spa-face" />
      </div>
      <div class="about_text">
        <h2>About   <span>Andr@ </span></h2> <hr>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          aliquam massa quis felis tempus, et elementum ipsum iaculis. Ut nec
          tortor eget dolor finibus fermentum ut nec orci. Vestibulum tempor
          neque sed sapien dapibus, vitae facilisis erat pharetra. Aenean et
          dictum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam massa quis felis tempus, et elementum ipsum iaculis. Ut nec tortor eget dolor finibus fermentum ut nec orci. Vestibulum tempor neque sed sapien dapibus, vitae facilisis erat pharetra. Aenean et dictum ante.
        </p>
      </div>
    </div>
    </div>
   <footer1/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import footer1 from '@/components/footer1.vue'

export default {
  name: 'home',
  components: {
  NavBar,
  footer1
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
  line-height: 2em;
  word-spacing: 5px;
  

}
.side_text{
   
   margin: 0 auto;
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
.mainPage{
    margin-top: 5em;
}
.about_text {
    width: 30%;
    text-align: left;
    margin-right: 3em;
}
.about_text p{
    letter-spacing: 0.03em;
}
hr {
    width:20%;
    background-color: black;
    margin-left: 0.2em;
}
 img {
     height:500px;
     border-radius: 100px;

 }
 .about_text span{
     color: #EA3CCE;
 }
 @media screen and (max-width: 768px) {
  .top_bar{
    background-position: center;
  }
 .side_text{
     margin: 0 auto;
   }
  
  img {
    display: none;
  }
}
 
</style>