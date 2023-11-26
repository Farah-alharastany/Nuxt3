<template>
  <div>
    <div>
      <header class="shadow-lg bg-white font-bold p-4">
        <nav class="container mx-auto flex justify-between">
          <h1>Farooha</h1>
          <ul class="flex gap-10">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Products</NuxtLink></li>
          </ul>
        </nav>
      </header>
      <div class="container mx-auto p-4">
        <slot />
      </div>
    </div>
    <div class="grid grid-cols-4 gap-5 bg-gray-200">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});
//fetch products
const { data: products } = await useFetch("https://fakestoreapi.com/products");
useHead({
  title: "Products Page",
  meta: [{ name: "descritption", content: "hello" }],
});
</script>

<style scoped></style>
