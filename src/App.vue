<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="uppernav">
    <i id="ikon" class="ri-search-line"></i>
    <p>
      <span id="logga">Dreamshoes</span>
    </p>
    <i id="ikon" class="ri-shopping-bag-fill"></i>
  </div>
  <div id="lowernav">
    <ul class="navlinks">
      <li><a href="#">Herr</a></li>
      <li><a href="#">Dam</a></li>
      <li><a href="#">Barn</a></li>
    </ul>
  </div>
  <RouterView />
</template>

<style scoped>
header {
  position: fixed;
  width: 100%;
}
#uppernav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 13px 0;
}
#lowernav {
  background-color: #FFF2C6;
  padding: 5px 0;
}
#logga {
  font-size: 30px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-decoration: underline;
}
#ikon {
  font-size: 25px;
  margin: 0 20px;
  cursor: pointer;
}
.navlinks {
  display: flex;
  justify-content: center;
  list-style: none;
  font-size: 20px;
}
.navlinks li {
  margin: 0 8vw;
}
.navlinks a {
  color: black;
  text-decoration: none;
}
.navlinks a:hover {
  text-decoration: underline;
}
</style>
