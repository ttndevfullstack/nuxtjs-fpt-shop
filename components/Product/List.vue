<script setup>
import 'vue3-carousel/dist/carousel.css';
import SvgIcon from 'vue3-icon';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { ProductList } from '~/constants/index';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
</script>

<template>
  <section class="w-full h-fit pt-4 pb-8 bg-white rounded-lg">
    <h1 class="flexStart gap-2 ml-4 mt-2 mb-3 text-primary font-bold uppercase text-[22px]">
      <svg-icon :fa-icon="faFire" :size="24" flip="horizontal"></svg-icon>
      KHYẾN MÃI HOT
    </h1>

    <div class="w-full h-fit">
      <carousel :items-to-show="4" :itemsToScroll="4">
        <slide v-for="(product, index) in ProductList" :key="index">
          <Product :product="product" />
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
