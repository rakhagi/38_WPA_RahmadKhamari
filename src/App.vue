<template>
<navigationBar />
<router-view/>
  <!-- <footer id="footer">
    <div class="container-fluid" style="background-color: #e6e8df">
      <div class="copyright text-center">
        &copy; Copyright <strong><span>OX Studio 2022</span></strong>. All Rights Reserved
      </div>
    </div>
  </footer> -->
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
}

*{
  margin: 0;
  padding: 0;
  z-index: 2;
}

body {
  background-color: #e6e8df;
  overflow-x: hidden;
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

/* Hero section  */
#hero {
  background: linear-gradient(117.19deg, rgba(164, 199, 40, 0.39) 49.26%, rgba(164, 199, 40, 0) 101.4%);
  height: 100vh;
  width: 100%;
  margin-top: -25px;
}

.herotag {
margin-top: 15%;
margin-left: 10%;
margin-bottom: 10px;
font-weight: bold;
}
.herotag p{
  width: 80%;
  font-size: 13px;
  font-weight: 400;
}
.btn-cta{
  margin-top: 8%;
  padding: 2px;
  width: 160px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 5px;
  background: #E9DFAE;
  border: 1px solid #000000;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  z-index: 3;
}
.acs1{
  z-index: 1;
}
.hero1 {
  z-index: 1;
}



</style>
