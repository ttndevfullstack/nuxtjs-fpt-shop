<script setup>
import SvgIcon from "vue3-icon";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <div class="flexCenter h-search w-search rounded">
    <input
      type="text"
      class="flexCenter w-full h-full px-3 text-black text-base font-normal outline-none placeholder:text-paragraph placeholder:text-sm hover:opacity-80"
      placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm"
    />
    <div class="flexCenter w-[58px] h-full bg-[#333333] cursor-pointer">
      <div class="w-fit h-fit rotate-[-90deg]">
        <svg-icon :fa-icon="faMagnifyingGlass" :size="22" flip="horizontal" class="fill-white"></svg-icon>
      </div>
    </div>
  </div>
</template>
