<script setup>
import SvgIcon from "vue3-icon";

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
  <NuxtLink class="flex-col gap-1 w-fit h-full p-[6px] hover:opacity-80" :to="props.src">
    <div class="flexCenter w-full">
      <svg-icon :fa-icon="props.icon" :size="20" flip="horizontal"></svg-icon>
    </div>
    <span class="text-sm font-normal text-white whitespace-nowrap">{{ props.title }}</span>
  </NuxtLink>
</template>
