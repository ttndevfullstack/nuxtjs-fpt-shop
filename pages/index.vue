<template>
  <main class="h-fit w-screen bg-primary">
    <div class="py-4 px-24">
      <div class="h-[208px] w-full">
        <Banner image="../public/images/banner.webp" />
      </div>
    </div>

    <div class="w-screen h-fit">
      <div class="flex flex-col gap-8 w-app h-fit mx-auto">
        <Introduce />
        <ProductTypeList />
        <div class="h-[100px] w-full rounded-lg overflow-hidden">
          <Banner image="../public/images/banner-small.webp" style="rounded-lg" />
        </div>
      </div>
    </div>
  </main>
</template>
