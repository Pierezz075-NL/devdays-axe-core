<template>
    <header class="navbar">
      <ul class="horizontal">
        <li>
          <a id="home" href="/">Home</a>
        </li>
        <li>
          <a id="shop" href="/Shop">Shop</a>
        </li>
        <li>
          <a id="cart" href="/Cart">Cart</a>
        </li>
        <li>
          <a id="about" href="/About">About</a>
        </li>
      </ul>
    </header>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  
  onMounted(() => {
    const url = window.location.href;
    if (url.includes("Cart")) {
      document.querySelector("#cart").classList.add("active");
    }
    if (url.includes("Home")) {
      document.querySelector("#home").classList.add("active");
    }
    if (url.includes("Shop")) {
      document.querySelector("#shop").classList.add("active");
    }
    if (url.includes("About")) {
      document.querySelector("#about").classList.add("active");
    }
  })
  </script>
  
  <style scoped>
  
  </style>
  