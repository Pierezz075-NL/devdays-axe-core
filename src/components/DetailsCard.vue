<template>
  <div class="listing">  
    <div class="imageContainer">
      <img :alt="imageAlt" class="stockImage" :src="imageSrc"/>
    </div>
    <div class="details">
      <h4>{{ itemName }}</h4>
      <div class="details">
        <a href="/cart" class="listingButton btn btn-primary">Add to Cart</a>
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

const imageAlt = 'Soccer item image'
</script>

<style scoped>
/* Add your styles here */
</style>
