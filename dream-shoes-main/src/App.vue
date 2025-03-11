<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header>
      <div id="uppernav">
        <form>
          <div class="search-bar">
            <span class="material-icons">search</span>
            <input class="search-input" type="search" />
          </div>
        </form>
        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <RouterLink to="/" id="logga">DREAMSHOES</RouterLink>
        <div class="korg">
          <span id="person" class="material-icons">person</span>
          <span class="material-icons">shopping_cart</span>
        </div>
      </div>
      <div id="lowernav">
        <ul class="navlinks">
          <li><RouterLink to="/allshoes">Herr</RouterLink></li>
          <li><RouterLink to="/allshoes">Dam</RouterLink></li>
          <li><RouterLink to="/allshoes">Barn</RouterLink></li>
        </ul>
      </div>
    </header>
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
  padding: 40px 0;
}
.nav-menu-phone {
  display: none;
}
.search-bar {
  width: max-content;
  display: flex;
  align-items: center;
  padding: 1px;
  border-radius: 20px;
  border-style: solid;
  border-color: black;
  margin-left: 15px;
}
.search-input {
  font-size: 15px;
  color: #333333;
  border: none;
  outline: none;
  background: none;
}
#logga {
  font-size: 3em;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-decoration: underline;
  margin-right: 100px;
}
.korg {
  margin-right: 15px;
  margin-left: 45px;
}
#lowernav {
  background-color: #fff0c7;
}
#navlinks {
  display: flex;
  justify-content: center;
  gap: 500px;
  list-style: none;
  font-size: 2em;
  padding: 0px 4rem;
}
#navlinks a {
  color: black;
  text-decoration: none;
}
#navlinks a:hover {
  text-decoration: underline;
}
.hamburger {
  display: none;
  cursor: pointer;
}
.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition:all 0.3s ease-in-out ;
  transition:all 0.3s ease-in-out ;
  background-color: black;
}
footer {
  background-color: #343434;
  width: 100%;
}
.footer-list {
  padding:  5rem 0;
  display: flex;
  justify-content: center;
  gap: 4rem;
}
.footer-list li {
  color: #e2e2e2;
  font-size: 1rem;
  display: block;
  margin: 8px 0px;
}
#footer-list1, #footer-list2, #footer-list3 {
  margin: 0 2rem;
}
#footer-list1 li:first-child {
  font-size: 1.5rem;
  color: #f0f0f0;
  margin-bottom: 20px;
}
#footer-list2 li:first-child {
  font-size: 1.5rem;
  color: #f0f0f0;
  margin-bottom: 20px;
}
#footer-list3 li:first-child {
  font-size: 1.5rem;
  color: #f0f0f0;
  margin-bottom: 20px;
}
@media (max-width: 1205px) {
  .search-input {
    display: none;
  }
  .search-bar {
    border: none;
    margin-right: none;
  }
  #lowernav {
    display: none;
  }
  .hamburger {
    display: block;
  }
  .korg {
    margin-left: none;
  }
} 
@media (max-width: 650px){
  .footer-list {
    flex-direction: column;
    align-items: center;
  }
  .footer-list li {
    text-align: center;
  }
#logga {
  margin: 0 auto;
}
@media (max-width: 420px){
  #logga {
    font-size: 2rem;
  }
  .korg {
    margin-right: 15px;
    margin-left: 0;
  }
}
}
</style>
