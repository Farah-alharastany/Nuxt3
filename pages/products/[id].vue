<template>
  <div>
    <Head>
      <Title>Nuxt Doji | {{ product.title }}</Title>
      <Meta name="description" :content="product.description"></Meta>
    </Head>
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
    </div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});
const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`;
const { data: product } = await useFetch(uri);
</script>

<style scoped></style>
