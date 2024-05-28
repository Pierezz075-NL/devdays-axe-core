<template>
    <div>
      <label id="dataInputLabelId">{{ inputLabel }}</label> 
      <input aria-labelledby="dataInputLabelId" class="form-control" id="dataInputId" :type="inputType"/>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  import { ref } from 'vue'
  
  const props = defineProps({
    inputLabel: String,
    inputType: String
  })
  
  const dataInputLabelId = ref('dataInputLabel')
  const dataInputId = ref('dataInput')
  </script>
  