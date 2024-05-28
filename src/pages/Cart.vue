<template>
  <div class="main">
    <TopHeading headingText="My Cart" />
    <h5>Items in your cart:</h5>
    <br />
    <hr />
    <CartItem
      itemName="Soccer Ball"
      imageSrc="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/11d17347-2265-45ce-8eb6-a22b0282918a/academy-voetbal-CkKSGj.png"
    />
    <hr />
    <p class="total">Total: <b>$50.00</b></p>
    <div class="row">
      <DataInput inputLabel="First Name" />
      <DataInput inputLabel="Last Name" />
      <DataInput inputLabel="Credit Card Number" />
      <DataInput inputLabel="CVV" />
      <button @click="handleClick">Continue</button>
    </div>
  </div>
</template>

<script setup>
import TopHeading from '../components/TopHeading.vue'
import DataInput from '../components/DataInput.vue'
import CartItem from '../components/CartItem.vue'

const handleClick = () => {
  alert("Order sent");
};
</script>

<style scoped>
/* Add your styles here */
</style>
