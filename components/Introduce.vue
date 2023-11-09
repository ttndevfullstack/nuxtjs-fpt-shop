<script setup>
import { SaleIntroduces, NewEvents } from "../constants/index";
</script>

<template>
  <section class="grid grid-cols-12 w-full h-[360px] px-[6px] pt-[6px] bg-white rounded-md">
    <div class="col-span-8 flex-col">
      <div class="w-full flex-1">
        <NuxtImg src="../public/images/banner2.webp" class="w-full h-full object-contain" />
      </div>
      <div class="flex w-full h-[55px]">
        <div
          v-for="(item, index) in SaleIntroduces"
          :key="index"
          class="flexCenter h-full w-full text-paragraph text-sm hover:text-black hover:font-bold hover:border-b-[2px] hover:border-solid hover:border-primary cursor-pointer"
        >
          <div class="flexCenter flex-col w-[160] h-full bg-transparent">
            <span>{{ item.title }}</span>
            <span>{{ item.description }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-4 flex-col pl-[6px] pb-[6px]">
      <div class="h-[100px] w-full">
        <NuxtImg src="../public/images/phoneimage.webp" class="w-full h-full object-cover" />
      </div>
      <div class="h-[100px] w-full my-[6px]">
        <NuxtImg src="../public/images/phoneimage2.webp" class="w-full h-full object-cover" />
      </div>
      <div class="flex-1">
        <span class="text-[15px] font-bold text-[#6c757d]">Tin khuyến mãi</span>
        <div v-for="(item, index) in NewEvents" :key="index" class="flex-col mt-2">
          <div class="flex justify-between gap-3">
            <div class="flexCenter w-[76px] h-[46px] border-[1px] border-solid border-gray-300 rounded-lg">
              <div class="w-[70px] h-[40px]">
                <NuxtImg :src="item.image" class="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
            <span class="text-[15px] font-bold text-black text-left flex-1">{{ item.description }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
