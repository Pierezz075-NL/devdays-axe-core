<template>
    <div>
      <h1 class="glow">{{ headingText }}</h1>
      <img :src="logo" alt="Logo"/>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  import logo from '../assets/field.png'
  
  const props = defineProps({
    headingText: String
  })
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  