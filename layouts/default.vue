<template>
  <div>
    <header class="shadow-lg bg-white font-bold p-4">
      <nav class="container mx-auto flex justify-between">
        <h1 >Farooha</h1>
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
</template>
<style scoped>
.router-link-exact-active {
  color: pink;
}
</style>
