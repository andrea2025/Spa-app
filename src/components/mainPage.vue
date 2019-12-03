<template>
  <div class="mainPage">
      <!-- <div>
            <router-link to="/"><h1>Andr@</h1></router-link> 
        </div> -->
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
</template>

<script>
//import NavBar from '@/components/NavBar.vue'
export default {
  name: "mainPage",
//   components:{
//       NavBar
//   }
};
</script>
<style scoped>
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

 }
 .about_text span{
     color: #EA3CCE;
 }
</style>
