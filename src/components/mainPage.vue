<template>
  <div class="mainPage">
   
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
