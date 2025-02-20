<script setup></script>

<template>
  <main>
    <section class="hero">
      <div class="hero-images">
        <div class="image-container">
          <img class="hero-image" src="../assets/images/dam.webp" alt="" />
          <div class="hero-button">
            <p>Damskor <i class="fa-solid fa-arrow-right"></i></p>
          </div>
        </div>
        <div class="image-container">
          <img class="hero-image" src="../assets/images/man.jpg" alt="" />
          <div class="hero-button">
            <p>Herrskor <i class="fa-solid fa-arrow-right"></i></p>
          </div>
        </div>
      </div>
    </section>
    <section class="products">
      <h2>ALLA SKOR</h2>
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
.hero-image {
  width: 600px;
}
.hero-images {
  display: flex;
  justify-content: center;
  gap: 2rem;
}
.image-container {
  position: relative;
  display: inline-block;
}
.hero-button {
  background-color: white;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 190px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
}
.hero-button p {
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}
/* Product section */
.product-image {
  width: 275px;
}
.products-container {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 2.76rem;
}
.products {
  margin-top: 4rem;
}
.products h2 {
  text-align: center;
  font-size: 2rem;
}
</style>
