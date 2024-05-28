<template>
    <button :class="buttonType">{{ buttonText }}</button>
</template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    buttonType: String,
    buttonText: String
  })
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>