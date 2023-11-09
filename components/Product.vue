<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  oldPrice: {
    type: String,
  },
  discount: {
    type: String,
  },
  timeDiscount: {
    type: String,
  },
  paymentType: {
    type: Array,
    required: true,
  },
  descriptionPayment: {
    type: String,
  },
});
</script>

<template>
  <section class="p-4"></section>
</template>
