<script setup>
import SvgIcon from 'vue3-icon';
import 'vue3-carousel/dist/carousel.css';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { ProductList } from '~/constants/index';
import { truncateText } from '~/helpers/truncate.ts';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const isHovered = ref(false);

const handleHover = (value) => {
  isHovered.value = value;
};

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
  <section class="w-full h-fit pt-4 pb-8 bg-white rounded-lg">
    <h1 class="flexStart gap-2 ml-4 mt-2 mb-3 text-primary font-bold uppercase text-[22px]">
      <svg-icon :fa-icon="faFire" :size="24" flip="horizontal"></svg-icon>
      KHYẾN MÃI HOT
    </h1>

    <div class="w-full h-fit">
      <carousel :items-to-show="4" :itemsToScroll="4">
        <slide v-for="product in ProductList" :key="product">
          <div class="flex w-full h-full">
            <div
              class="w-[300px] px-3 py-3 bg-transparent hover:border-[1px] hover:border-solid hover:border-gray-300 rounded-lg transition-all duration-200 ease-linear scale-parent"
            >
              <div
                class="relative flexEnd flex-col h-[214px] w-full scale-child transition-all duration-200 ease-linear"
              >
                <NuxtImg src="/images/border-product.webp" class="absolute top-0 left-0 z-10 w-full h-full" />
                <NuxtImg :src="product.image" class="object-cover w-[160px] h-[160px] mb-2" />
                <div
                  class="absolute bottom-4 left-0 flexCenter bg-primary text-white text-sm font-base h-[24px] w-fit px-2 rounded-r-md"
                >
                  {{ product.discount }}
                </div>
              </div>

              <h2
                class="text-[17px] font-bold w-full text-left text-[#474C51] mt-3 hover:text-[#0168fa] cursor-pointer"
              >
                {{ truncateText(product.name, 48) }}
              </h2>

              <div class="flexBetween">
                <div class="flexCenter h-[28px] w-[130px] bg-primary text-white font-bold text-[18px] rounded-3xl">
                  {{ product.price }}&nbsp;<span class="underline">đ</span>
                </div>
                <div class="flex flex-col mt-1">
                  <span class="w-full text-sm text-[#919191] text-right line-through"
                    >{{ product.oldPrice }}&nbsp;<span class="underline">đ</span></span
                  >
                  <span class="w-full text-xs text-[#a7a7a7] text-right">3 ngày 14:37:12</span>
                </div>
              </div>

              <div class="flex flex-col h-[104px] w-full bg-[#f8f9fa] pt-2 mt-4 px-4 rounded-lg">
                <div class="flexStart gap-4">
                  <div
                    v-if="product.paymentType.includes('zalopay')"
                    class="w-[45px] h-[45px] rounded-full overflow-hidden"
                  >
                    <NuxtImg src="/images/zalo-pay.webp" class="object-cover w-full h-full" />
                  </div>
                  <div
                    v-if="product.paymentType.includes('kredivo')"
                    class="w-[45px] h-[45px] rounded-full overflow-hidden"
                  >
                    <NuxtImg src="/images/kredivo.webp" class="object-cover w-full h-full" />
                  </div>
                  <div
                    v-if="product.paymentType.includes('vnpay')"
                    class="w-[45px] h-[45px] rounded-full overflow-hidden"
                  >
                    <NuxtImg src="/images/baohanh2nam.webp" class="object-cover w-full h-full" />
                  </div>
                </div>
                <!-- <span>{{ product.descriptionPayment }}</span> -->
              </div>
            </div>
          </div>
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </section>
</template>

<style>
.scale-parent:hover > .scale-child {
  transform: scale(1.05);
}

.carousel__pagination {
  display: none;
}

.carousel__prev .carousel__prev--disabled,
.carousel__next .carousel__next--disabled {
  opacity: 0.6;
}

.carousel__prev,
.carousel__next {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: transparent;
  border: 1px solid #b1b1b1;
  top: 160px !important;
}

.carousel__icon {
  width: 28px;
  height: 28px;
}
</style>
