<script setup>
import { TypeProducts } from "../constants/index";
</script>

<template>
  <section class="grid grid-cols-6 grid-rows-2 w-full h-[322px] bg-white text-black rounded-md overflow-hidden">
    <div
      v-for="(item, index) in TypeProducts"
      :key="index"
      class="flexCenter flex-col col-span-1 h-full w-full p-4 border-[1px] border-solid border-gray-100 product-shadow transition-all duration-100 ease-linear cursor-pointer"
    >
      <div class="flexCenter w-[60px] h-[60px] rounded-full bg-[#f4f4f4]">
        <NuxtImg :src="item.image" class="object-cover w-[151px] h-[40px] text-white" />
      </div>
      <span>{{ item.type }}</span>
    </div>
  </section>
</template>
