<script setup></script>

<template>
  <main>
    <section class="hero">
      <img src="../assets/images/hero.webp" alt="" />
      <div class="hero-content">
        <h1>VÄLKOMMEN TILL DREAMSHOES</h1>
        <RouterLink to="/allshoes" class="hero-button">ALLA SKOR</RouterLink>
      </div>
    </section>
    <section class="products">
      <div class="products-container">
        <div class="product-card">
          <img class="product-image" src="../assets/images/dior2.webp" alt="" />
          <p>Nike</p>
          <p>Jordan 1 Retro Dior High</p>
          <p>110 000 kr</p>
        </div>
        <div class="product-card">
          <img class="product-image" src="../assets/images/dior2.webp" alt="" />
          <p>Nike</p>
          <p>Jordan 1 Retro Dior High</p>
          <p>110 000 kr</p>
        </div>
        <div class="product-card">
          <img class="product-image" src="../assets/images/dior2.webp" alt="" />
          <p>Nike</p>
          <p>Jordan 1 Retro Dior High</p>
          <p>110 000 kr</p>
        </div>
        <div class="product-card">
          <img class="product-image" src="../assets/images/dior2.webp" alt="" />
          <p>Nike</p>
          <p>Jordan 1 Retro Dior High</p>
          <p>110 000 kr</p>
        </div>
      </div>
    </section>
    <section class="categories">
      <div class="category">
        <img src="../assets/images/TRIO_BANNER_WOMEN_DESKTOP.webp" alt="" />
        <RouterLink to="/womenshoes" class="category-button"
          >DAMSKOR</RouterLink
        >
      </div>
      <div class="category">
        <img src="../assets/images/TRIO_BANNER_MEN_DESKTOP.webp" alt="" />
        <RouterLink to="/menshoes" class="category-button">HERRSKOR</RouterLink>
      </div>
      <div class="category">
        <img src="../assets/images/2148817360.jpg" alt="" />
        <RouterLink to="/kidshoes" class="category-button">BARNSKOR</RouterLink>
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
  font-weight: bold;
}
</style>
