<template>
  <div class="main">
    <TopHeading headingText="Soccer Gear Details" />
    <p>
      The soccer world has made it very exciting to purchase and buy the gear you need for proper game preparation.
    </p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import TopHeading from '../components/TopHeading.vue'

onMounted(() => {
  document.title = "Soccer Gear Details Page";
})
</script>

<style scoped>
/* Add your styles here */
</style>
