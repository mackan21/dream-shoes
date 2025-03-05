<script setup>
import { ref } from 'vue'

const shoes = ref(null)

function searchShoes() {
  fetch('/data.json')
    .then((response) => response.json())
    .then((result) => {
      shoes.value = result.shoes
    })
}</script>
<template>
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
</template>
<style scoped>
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
}</style>
