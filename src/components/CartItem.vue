<template>
  <div class="listing cartItem">  
    <div class="imageContainer">
      <img alt="cart image" class="stockImage" :src="imageSrc"/>
    </div>
    <div class="details">
      <h4>{{ itemName }}</h4>
      <p>This soccer ball is designed for durability and performance in any game</p>
      <p>Price: $50.00</p>
      <a class="cartLink" href="/details">Details</a>
      <a class="cartLink" href="#">Buy again</a>
      <div class="details">
        <a href="#" class="listingButton btn btn-primary">Remove from cart</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  imageSrc: String,
  itemName: String
})
</script>

<style scoped>
/* Add your styles here */
</style>
