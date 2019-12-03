<template>
    <div class="Nav">
       <nav class="navigation">
            <div class="top_bar1">
            <router-link to="/"><h1>Andr@ <span> spa</span></h1></router-link> 
        </div>
        <ul class="nav_list">
            <li class="nav_list_item item1"><router-link to="/">Home</router-link></li>
            <li class="nav_list_item"> <router-link to="/about">About</router-link></li>
        </ul>
        <div class="nav_auth auth">
        <router-link :to="{name:'register'}"> Register</router-link>
      </div>
       <div class="nav_auth">
       <router-link :to="{name:'login'}"> Login </router-link>
      </div>
       </nav>
    </div>
</template>
<script>
export default {
    name:'NavBar'
}
</script>
<style  scoped>
a {
  color: inherit;
  text-decoration: none;
}
h1{
    color: #EA3CCE;
}
.item1{
    margin-right: 3em;
}
.navigation {
  display: flex;
  justify-content: space-between;
  padding: 2em 3em;
  color: #ffffff;
  align-items: center;
  font-weight: bolder;
}
.top_bar1  span {
    color:#fff;
}
.nav_list {
  display: flex;
  list-style: none;
}
.nav_list_item{
    margin: 0 5em;
}
.auth{
    margin-left: 9em;
}
.nav_auth {
     background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 100%), #EA3CCE;
    
border-radius: 20px;
padding: 0.8em 1.5em;
}
.nav_auth:hover {
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #EA3CCE;

}
</style>