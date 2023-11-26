<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h1 class="text-4xl my-7">{{ product.title }}</h1>
        <p class="text-xl my-7">Price - ${{ product.price }}</p>
        <p class="font-bold border-b-2">Product Description</p>
        <p class="mb-7">{{ product.description }}</p>
        <button class="btn flex">
          <i class="bi bi-cart-plus-fill"></i>
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const { product } = defineProps(["product"]);
</script>
<style scoped>
img {
  max-width: 400px;
}
</style>
