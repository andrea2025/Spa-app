<template>
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
     <div>
            <router-link to="/"><i class="fa fa-caret-up" aria-hidden="true"></i></router-link> 
        </div> 
        <footer/>
  </div>
</template>

<script>
// import footer from '@/components/footer.vue'
export default {
  name: "mainPage",
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
     border-radius: 100px;

 }
 .about_text span{
     color: #EA3CCE;
 }
 i{
   font-size: 5em;
   color: rgb(2, 70, 19);
   margin-left:11.5em;
 }
 i:hover{
   color: rgb(2, 70, 19,0.8);
 }

</style>
