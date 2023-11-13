<script setup>
const props = defineProps({
  product: Object,
});

const activePayment = ref(props?.product?.descriptionPayments?.kredivo);
const setActivePayment = (typePayment) => {
  activePayment.value = typePayment;
};
</script>

<template>
  <div class="flex w-full h-full">
    <div
      class="w-[300px] px-3 py-3 bg-transparent hover:border-[1px] hover:border-solid hover:border-gray-300 rounded-lg transition-all duration-200 ease-linear scale-parent"
    >
      <div class="relative flexEnd flex-col h-[214px] w-full scale-child transition-all duration-200 ease-linear">
        <NuxtImg src="/images/border-product.webp" class="absolute top-0 left-0 z-10 w-full h-full" />
        <NuxtImg :src="props.product.image" class="object-cover w-[160px] h-[160px] mb-2" />
        <div
          class="absolute bottom-4 left-0 flexCenter bg-primary text-white text-sm font-base h-[24px] w-fit px-2 rounded-r-md"
        >
          {{ props.product.discount }}
        </div>
      </div>

      <h2 class="text-[17px] font-bold w-full text-left text-[#474C51] mt-3 hover:text-[#0168fa] cursor-pointer">
        {{ useTruncateText(props.product.name, 48) }}
      </h2>

      <div class="flexBetween">
        <div class="flexCenter h-[28px] w-[130px] bg-primary text-white font-bold text-[18px] rounded-3xl">
          {{ props.product.price }}&nbsp;<span class="underline">đ</span>
        </div>
        <div class="flex flex-col mt-1">
          <span class="w-full text-sm text-[#919191] text-right line-through"
            >{{ props.product.oldPrice }}&nbsp;<span class="underline">đ</span></span
          >
          <span class="w-full text-xs text-[#a7a7a7] text-right">3 ngày 14:37:12</span>
        </div>
      </div>

      <div class="flex flex-col h-[104px] w-full bg-[#f8f9fa] py-2 mt-4 px-4 rounded-lg">
        <div class="flexStart gap-4">
          <div
            v-if="props.product.paymentType.includes('kredivo')"
            class="w-[45px] h-[45px] rounded-full overflow-hidden"
            @mousemove="setActivePayment(props?.product?.descriptionPayments?.kredivo)"
          >
            <NuxtImg src="/images/kredivo.webp" class="object-cover w-full h-full" />
          </div>

          <div
            v-if="props.product.paymentType.includes('zalopay')"
            class="w-[45px] h-[45px] rounded-full overflow-hidden"
            @mousemove="setActivePayment(props?.product?.descriptionPayments?.zalopay)"
          >
            <NuxtImg src="/images/zalo-pay.webp" class="object-cover w-full h-full" />
          </div>

          <div
            v-if="props.product.paymentType.includes('OCB')"
            class="w-[45px] h-[45px] rounded-full overflow-hidden"
            @mousemove="setActivePayment(props?.product?.descriptionPayments?.ocb)"
          >
            <NuxtImg src="/images/OCB-payment.webp" class="object-cover w-full h-full" />
          </div>

          <div
            v-if="props.product.paymentType.includes('vnpay')"
            class="w-[45px] h-[45px] rounded-full overflow-hidden"
            @mousemove="setActivePayment(props?.product?.descriptionPayments?.vnpay)"
          >
            <NuxtImg src="/images/vnpay-payment.webp" class="object-cover w-full h-full" />
          </div>
        </div>

        <span class="block mt-2 text-left text-[14px] font-base text-[#555]">{{ activePayment }}</span>
      </div>
    </div>
  </div>
</template>
