<template>
    <div class="main">
      <TopHeading headingText="Soccer Gear Hub" />
      <p>
        Finding top-quality soccer gear can be challenging in today's market.
      </p>
      <p>
        At the Soccer Gear Hub, we are dedicated to being your go-to source for jerseys, cleats, and accessories, all at unbeatable prices!
      </p>
      <SoccerButton buttonType="primary" buttonText="Shop Gear" />
      <SoccerButton buttonType="secondary" buttonText="Current Promotions" />
    </div>
  </template>
  
  <script setup>
  import TopHeading from '../components/TopHeading.vue'
  import SoccerButton from '../components/Button.vue'
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  