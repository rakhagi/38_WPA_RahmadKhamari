<template>
<navigationBar />
<router-view/>
  <footer id="footer">
    <div class="container-fluid" style="background-color: #e6e8df">
      <div class="copyright">
        &copy; Copyright <strong><span>OX Studio 2022</span></strong>. All Rights Reserved
      </div>
    </div>
  </footer>
</template>

<script>
import navigationBar from "./components/navigationBaru.vue"; 
//import Banner from "./components/homeBanner.vue";
//import ourWorks from "./components/ourWorks.vue";
//import KarouselFlower from "./components/KarouselFlower.vue";
//import KarouselPicnic from "./components/KarouselPicnic.vue";
//import KarouselWedding from "./components/KarouselWedding.vue";
//import testimonials from "./components/testiMonials.vue";
//import aboutUs from "./components/aboutUs.vue";

export default {
  name: "App",
  components: {
    navigationBar,
    //KarouselFlower,
    //KarouselPicnic,
    //KarouselWedding,
    //Banner,
    //testimonials,
    //aboutUs,
    //ourWorks,
  },
};
</script>

<style>
#app {
  font-family: Avenir,"Poppins", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



body {
  background-color: #e6e8df;
}
a {
  text-decoration: none;
  color: #2c3e50
}
a:hover{
  color:black; 

}
a.router-link-active {
  border-bottom: 2px solid grey;
  color: black;
}

.navbar-brand {
  font-weight: 600;
}
.nav-item {
  font-weight: 400;
}

</style>
