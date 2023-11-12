<script setup>
import 'tippy.js/dist/tippy.css';
import 'vue3-carousel/dist/carousel.css';
import { Tippy } from 'vue-tippy';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { NewEvents, BannerList } from '~/constants/index';

const { state, setState } = useStateData(0);
</script>

<template>
  <section class="grid grid-cols-12 w-full h-[360px] px-[6px] pt-[6px] bg-white rounded-md">
    <div class="col-span-8 flex-col">
      <div class="w-full flex-1">
        <carousel :items-to-show="1" :itemsToScroll="1" v-model="state" autoplay="3000" wrapAround>
          <slide v-for="banner in BannerList" :key="banner.index">
            <NuxtImg :src="banner.image" class="w-full h-full object-cover" />
          </slide>

          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>

      <div class="flex w-full h-[55px]">
        <div
          v-for="banner in BannerList"
          :key="banner.index"
          :class="`${
            state == banner.index && 'border-primary border-solid border-b-[3px]'
          } flexCenter h-full w-full text-paragraph text-sm hover:text-black hover:font-semibold hover:border-b-[3px] hover:border-solid hover:border-primary cursor-pointer`"
          @click="setState(banner.index)"
        >
          <div class="flexCenter flex-col w-[160] h-full bg-transparent p-2 transition-all duration-100 ease-linear">
            <span class="text-center">{{ banner.title }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="col-span-4 flex-col pl-[6px] pb-[6px]">
      <div class="h-[100px] w-full">
        <NuxtImg src="/images/phoneimage.webp" class="w-full h-full object-cover" />
      </div>
      <div class="h-[100px] w-full my-[6px]">
        <NuxtImg src="/images/phoneimage2.webp" class="w-full h-full object-cover" />
      </div>
      <div class="flex-1">
        <span class="text-[15px] font-bold text-[#6c757d]">Tin khuyến mãi</span>
        <div v-for="(item, index) in NewEvents" :key="index" class="flex-col mt-2">
          <tippy placement="left" animation class="bg-white" theme="light">
            <div class="flex justify-between gap-3">
              <div class="flexCenter w-[76px] h-[46px] border-[1px] border-solid border-gray-300 rounded-lg">
                <div class="w-[70px] h-[40px]">
                  <NuxtImg :src="item.image" class="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
              <span class="text-[15px] font-bold text-black text-left flex-1">{{ item.description }}</span>
            </div>

            <template #content>
              <div class="w-[244px] h-[160px] rounded-md overflow-hidden">
                <NuxtImg :src="item.bannerImage" class="w-full h-full object-cover" />
              </div>
            </template>
          </tippy>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.carousel__pagination {
  display: none;
}

.tippy-content {
  border-radius: 6px;
  padding: 6px !important;
  background-color: white !important;
}

.tippy-box {
  border: 1px solid #ccc;
}
</style>
