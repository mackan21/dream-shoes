<script setup>
import { ref } from 'vue'

const shoes = ref([])

function searchShoes() {
  fetch('/data.json')
    .then((response) => response.json())
    .then((result) => {
      shoes.value = result.shoes
    })
    .catch((error) => console.error('Error fetching data:', error))
}
function toggleFacts(index) {
  shoes.value[index].showFacts = !shoes.value[index].showFacts
}
searchShoes()
</script>

<template>
 <h2 class="sko"> Hitta Din Nästa Sko</h2>
<section class="search-bar">
  <!--  <button @click="searchShoes">Search Brand</button> -->
  <div v-if="shoes.length > 0" class="shoe-grid">
      <div
        v-for="(shoe, index) in shoes"
        :key="index"
        class="shoe-card"
      >
      <button @click="addToCart(shoe)" class="cart-btn"> <font-awesome-icon icon="fa-solid fa-cart-shopping"/></button>

        <img :src="shoe.image" :alt="shoe.name" class="shoe-image" />
        <div class="shoe-details">
          <h3>{{ shoe.name }}</h3>
          <p class="brand">{{ shoe.brand }}</p>
          <p class="price">{{ shoe.price }} KR</p>
          <p class="category">{{ shoe.category }}</p>
          <button @click="toggleFacts(index)" class="more-btn">
            {{ shoe.showFacts ? 'Show Less' : 'Show More' }}
          </button>
          <div v-if="shoe.showFacts" class="shoe-facts">
            <p><strong>Type:</strong> {{ shoe.facts.type }}</p>
            <p><strong>Color:</strong> {{ shoe.facts.color }}</p>
            <p><strong>Material:</strong> {{ shoe.facts.material }}</p>
            <ul>
              <li v-for="(feature, idx) in shoe.facts.features" :key="idx">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <p v-else>No shoes found</p>
</section>
</template>
<style scoped>

.sko {
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
}

.search-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}


.shoe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

.shoe-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.shoe-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
}

.shoe-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.shoe-details {
  padding: 1rem;
}

.shoe-details h3 {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.brand {
  font-size: 1.2rem;
  font-style: italic;
  color: #000000;
}

.price {
  font-size: 1.4rem;
  color: #000000;
  font-weight: bold;
}

.category {
  font-size: 1rem;
  color: #000000;
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
.more-btn {
  background-color: #fff2c6;
  padding: 2px 4px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
}

.more-btn:hover {
  background-color: #d3d3d3;
}
.cart-btn {
  background-color: #f0f0f0;
  padding: 2px 4px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
  margin-bottom: 20px;
}

.cart-btn:hover {
  background-color: #d3d3d3;
}

.shoe-facts {
  margin-top: 1rem;
  text-align: left;
}

.shoe-facts p,
.shoe-facts ul {
  font-size: 1rem;
  color: #000000;
}

.shoe-facts ul {
  list-style-type: disc;
  margin-left: 20px;
}
</style>
