<script setup>
import SvgIcon from "vue3-icon";
import { NavLinks } from "~/constants/index";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <nav class="flexCenter w-screen h-search px-24 bg-nav text-white">
    <div v-for="(navLink, index) in NavLinks" :key="index" class="h-full w-fit mr-5 hover:opacity-75 cursor-pointer">
      <NuxtLink class="flexCenter h-full w-fit gap-1" :to="navLink.src">
        <div class="flexCenter w-full">
          <svg-icon :fa-icon="navLink.icon" :size="16" flip="horizontal"></svg-icon>
        </div>
        <span class="text-sm font-normal whitespace-nowrap">{{ navLink.title }}</span>
      </NuxtLink>
    </div>
  </nav>
</template>
