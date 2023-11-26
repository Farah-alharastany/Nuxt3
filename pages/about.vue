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
    <h1>{{ data.SYP.value }}</h1>
    <h2>About</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dolores ullam
      esse, cupiditate soluta placeat facere numquam nulla illo quod obcaecati
      porro officiis. Excepturi, autem sint neque nemo deserunt ea.
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dolores ullam
      esse, cupiditate soluta placeat facere numquam nulla illo quod obcaecati
      porro officiis. Excepturi, autem sint neque nemo deserunt ea.
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dolores ullam
      esse, cupiditate soluta placeat facere numquam nulla illo quod obcaecati
      porro officiis. Excepturi, autem sint neque nemo deserunt ea.
    </p>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/SYP");
</script>

<style scoped></style>
