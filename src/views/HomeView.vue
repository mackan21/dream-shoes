<script setup>
import { ref } from 'vue'

const shoes = ref(null)

function searchShoes() {
  fetch('/data.json')
    .then((response) => response.json())
    .then((result) => {
      shoes.value = result.shoes
    })
}
 </script>
<template>
  <main>
    <section class="hero">
      <img src="../assets/images/hero.webp" alt="" />
      <div class="hero-content">
        <h1>VÄLKOMMEN TILL DREAMSHOES</h1>
        <RouterLink class="hero-button">ALLA SKOR</RouterLink>
      </div>
    </section>
     <h2 class="titel-vår"> Bäst Säljare</h2>
    <section class="products">

      <div class="products-container">
        <div class="product-card">
          <img class="product-image" src="../assets/images/dior2.webp" alt="" />
          <p>Nike</p>
          <p>Jordan 1 Retro Dior High</p>
          <p>110 000 kr</p>
          <button @click="addToCart" class="add-to-cart-button">
    Add to Cart
  </button>
        </div>
        <div class="product-card">
          <img class="product-image" src="../assets/images/Grey2.webp" alt="" />
          <p>Addidas</p>
          <p>Campus 00s "Grey Gum"</p>
          <p>18 405 kr </p>
          <button @click="addToCart" class="add-to-cart-button">
    Add to Cart
  </button>
        </div>
        <div class="product-card">
          <img class="product-image" src="../assets/images/png.jpg" alt="" />
          <p>Puma</p>
          <p>Speedcat OG Sneakers Unisex</p>
          <p>10 000 kr</p>
          <button @click="addToCart" class="add-to-cart-button">
    Add to Cart
  </button>
        </div>
        <div class="product-card">
          <img class="product-image" src="../assets/images/n.webp" alt="" />
          <p>New Balance</p>
          <p>New Balance BB480 Kids Sneakers</p>
          <p>11 000 kr</p>
          <button @click="addToCart" class="add-to-cart-button">
    Add to Cart
  </button>
        </div>
      </div>
    </section>
    <h2 class="sko"> Hitta Din Nästa Sko</h2>




    <section class="search-bar">
      <button @click="searchShoes">Search Brand</button>
      <dl v-if="shoes !== null">
  <template v-for="(shoe, index) in shoes" :key="index">
    <dt>{{ shoe.brand }}</dt>
    <dt>{{ shoe.name }}</dt>
    <dt>{{ shoe.year }}</dt>
    <dt>{{ shoe.category }}</dt>
    <dd>{{ shoe.price }} KR</dd>

  </template>
</dl>
    </section>




    <section class="categories">
      <div class="category">
        <img src="../assets/images/TRIO_BANNER_WOMEN_DESKTOP.webp" alt="" />
        <RouterLink class="category-button">DAMSKOR</RouterLink>
      </div>
      <div class="category">
        <img src="../assets/images/TRIO_BANNER_MEN_DESKTOP.webp" alt="" />
        <RouterLink class="category-button">HERRSKOR</RouterLink>
      </div>
      <div class="category">
        <img src="../assets/images/2148817360.jpg" alt="" />
        <RouterLink class="category-button">BARNSKOR</RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Hero section */
.hero {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-content {
  position: absolute;
  top: 20%;
  left: 2%;
  color: white;
  max-width: 600px;
}
h1 {
  font-size: 4rem;
  font-weight: bold;
}
.hero-button {
  display: inline-block;
  background: white;
  color: black;
  text-decoration: none;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: 2px solid black;
  margin-top: 1rem;
}
/* Bestseller section*/
.product-image {
  width: 275px;
}

.products-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
}
/* Categories section */
.categories {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 2rem;
}
.category {
  position: relative;
  width: 33%;
}
.category img {
  width: 100%;
  display: block;
}
.category-button {
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translate(-50%);
  background: white;
  color: black;
  text-decoration: none;
  border: 2px solid black;
  border-radius: 50px;
  padding: 1rem 2rem;
}
.titel-vår, .sko {
  position: relative;
  margin-left: 20px;
  margin-top: 50px;
  margin-bottom: 20px;
}
.add-to-cart-button, .search-button {
  background-color: #FFF2C6;
  color: rgb(0, 0, 0);
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  margin-top: 20px;
  margin-left: 20px;
}

.add-to-cart-button:hover {
  background-color: #ebd9a0;
}
.search-button :hover {background-color:#ebd9a0}

.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.search-input {
  padding: 10px;
  font-size: 16px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  margin-top: 20px;
}
.search-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.search-bar button {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  background-color: #FFF2C6;
  color: black;
  border: none;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: background-color 0.3s ease;
}

.search-bar button:hover {
  background-color: #ebd9a0;
}


.search-bar dl {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  padding: 1rem;
  border-top: 2px solid #ccc;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.search-bar dt {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.search-bar dd {
  font-size: 1rem;
  margin-bottom: 0.8rem;
  color: #333;
}

.search-bar dl .shoe-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background-color: #fafafa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

</style>
