<script setup>
const props = defineProps({
  image: {
    type: String,
    require: true,
  },
});
</script>

<template>
  <div class="'w-full h-full">
    <NuxtImg :src="props.image" class="w-full h-full object-cover" />
  </div>
</template>
