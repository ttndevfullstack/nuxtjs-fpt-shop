<script setup>
import { HeaderLinks } from "../constants/index";

const props = defineProps({
  logo: {
    type: String,
    require: true,
  },
});
</script>

<template>
  <header class="grid grid-cols-12 grid-rows-1 h-header w-screen px-24 bg-primary text-white">
    <div class="col-span-2 flex justify-start items-center h-full w-full"><NuxtImg :src="props.logo" class="object-cover w-[151px] h-[40px] text-white" /></div>
    <div class="flexCenter col-span-5">
      <Search />
    </div>
    <div class="flexCenter col-span-5 ml-5">
      <div v-for="(headerLink, index) in HeaderLinks" :key="index" class="flexCenter h-full w-full">
        <HeaderButton :title="headerLink.title" :src="headerLink.href" :icon="headerLink.icon" />
      </div>
    </div>
  </header>
</template>
