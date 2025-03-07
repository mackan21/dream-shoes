<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="uppernav">
    <i id="ikon" class="ri-search-line"></i>
    <RouterLink to="/" id="logga">DREAMSHOES</RouterLink>
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
  <footer>
    <div class="footer-list">
      <div id="footer-list1">
        <ul>
          <li>Kundtjänst</li>
          <li>Vanliga frågor</li>
          <li>Kontakta oss</li>
          <li>Köpvillkor</li>
          <li>Storleksguide</li>
        </ul>
      </div>
      <div id="footer-list2">
        <ul>
          <li>Dreamshoes</li>
          <li>Om oss</li>
          <li>Lediga jobb</li>
          <li>Pressrum</li>
          <li>Hållbarhet</li>
        </ul>
      </div>
      <div id="footer-list3">
        <ul>
          <li>Utforska</li>
          <li>Herrar</li>
          <li>Damer</li>
          <li>Barn</li>
          <li>Varor</li>
          <li>Medlemsvillkor</li>
        </ul>
      </div>
    </div>
  </footer>
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
  background-color: #fff2c6;
  padding: 5px 0;
}
#logga {
  font-size: 30px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-decoration: underline;
  color: black;
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
footer {
  background-color: #343434;
}
.footer-list {
  padding: 50px 400px;
  display: flex;
  justify-content: space-between;
}
.footer-list li {
  color: #e2e2e2;
  font-size: 0.9em;
  display: block;
  margin: 8px 0px;
}
#footer-list1 li:first-child {
  font-size: 1em;
  color: #f0f0f0;
  margin-bottom: 20px;
}
#footer-list2 li:first-child {
  font-size: 1em;
  color: #f0f0f0;
  margin-bottom: 20px;
}
#footer-list3 li:first-child {
  font-size: 1em;
  color: #f0f0f0;
  margin-bottom: 20px;
}
</style>
