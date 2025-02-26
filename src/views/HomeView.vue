<script setup></script>

<template>
  <main>
    <section class="hero">
      <img src="../assets/images/hero.webp" alt="" />
      <div class="hero-content">
        <h1>VÄLKOMMEN TILL DREAMSHOES</h1>
        <RouterLink class="hero-button">ALLA SKOR</RouterLink>
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
/* Bestseller section */
.product-image {
  width: 275px;
}
.products-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
}
</style>
