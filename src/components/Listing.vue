<template>
  <div class="listing">
    <div class="imageContainer">
      <img alt="listing image" class="stockImage" :src="imageSrc" />
    </div>
    <div class="details">
      <h4 data-test-id="itemName">{{ itemName }}</h4>
      <p>{{ itemDetails }}</p>
    </div>
    <div class="details">
      <a :href="link" id="moreDets" class="listingButton btn btn-primary">More Details</a>
      <a href="/cart" id="addCart" class="listingButton btn btn-primary">Add to Cart</a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  imageSrc: String,
  itemName: String,
  itemDetails: String,
  link: String
})
</script>

<style scoped>
/* Add your styles here */
</style>
