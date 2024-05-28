<script setup>
// Import the Header and Footer components
import HeaderComponent from './components/Header.vue'
import FooterComponent from './components/Footer.vue'
</script>

<template>
  <div class="App">
    <HeaderComponent />
    <!-- This is where the routed components will be rendered -->
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
