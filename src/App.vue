<template>
  <navigationBar />
  <h1>Our Product</h1>
  <p>We constantly innovate to develop creative ideas for new functions, shapes and decorations for the Product. Continuous refinement of our products and process makes Flower Bouquet a form of Gifts that are high-quality, innovative, and Creative.</p>
  <karousel />  
  <footerComp/>
</template>

<script>
import navigationBar from "./components/navigationBar.vue";
import karousel from "./components/carouselComponen.vue";
import footerComp from "./components/footerComp.vue"

export default {
  name: "App",
  components: {
    navigationBar,
    karousel,
    footerComp,
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

ul {
  margin: 5px;
}

.gambar {
  margin-top: 90px;
}

.ikon-navbar {
  width: 80px;
  height: 80px;
  border: 1px;
  border-radius: 120px;
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



</style>
