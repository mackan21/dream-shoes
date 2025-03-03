<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
 <div id="uppernav">
      <form>
        <div class="search-bar">
          <span class="material-icons">search</span>
          <input class="search-input" type="search" />
        </div>
      </form>
      <p>
        <span id="logga">Dreamshoes</span>
      </p>
      <div class="korg">
        <span id="person" class="material-icons">person</span>
        <span class="material-icons">shopping_cart</span>
      </div>
    </div>
    <div id="lowernav">
      <ul class="navlinks">
        <li><a href="#">Herr</a></li>
        <li><a href="#">Dam</a></li>
        <li><a href="#">Barn</a></li>
      </ul>
    </div>
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
  padding: 40px 0;
}
.search-bar {
  width: max-content;
  display: flex;
  align-items: center;
  padding: 1px;
  border-radius: 20px;
  border-style: solid;
  border-color: black;
  margin-left: 50px;
}
.search-input {
  font-size: 15px;
  margin-left: 14px;
  color: #333333;
  border: none;
  outline: none;
  background: none;
}

#lowernav {
  background-color: #fff0c7;
  padding: 5px 0;
}
#logga {
  font-size: 4em;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-decoration: underline;
}

.korg {
  margin-right: 80px;
  margin-left: 100px;
}
#person {
  margin-right: 30px;
}
.navlinks {
  display: flex;
  justify-content: center;
  justify-content: space-between;
  list-style: none;
  font-size: 2em;
  padding: 0px 4em;
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
  padding:  50px 400px;
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
