<template>
<navigationBar />
<router-view/>
  <footer id="footer">
    <div class="container-fluid" style="background-color: #eaeaea">
      <div class="copyright">
        &copy; Copyright <strong><span>OX Studio 2022</span></strong>. All Rights Reserved
      </div>
    </div>
  </footer>
</template>

<script>
import navigationBar from "./components/navigationBar.vue"; 
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.ikon-navbar {
  width: 60px;
  height: 60px;
  border: 1px;
  border-radius: 100px; 
}

.navbar-brand {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-align: left;
  margin-left: -200px;
  font-size: 25px;
}

h1 {
  margin-top: 90px;
  margin-left: 40px;
  text-align: left;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body {
  background-color: #eaeaea;
}
a {
  text-decoration: none;
  color: #2c3e50
}
a:hover{
  color: #5cc6db; 

}
a.router-link-active {
  border-bottom: 2px solid grey;
  color: black;
}
</style>
