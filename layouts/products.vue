<template>
  <div>
    <header>
      <nav>
        <h1>products page</h1>
      </nav>
    </header>
    <div>
      <slot />
    </div>
    <footer class="container shadow-lg border-t-2 bg-white font-bold">
      <ul class="container flex shadow-lg border-t-2 bg-white font-bold p-4 gap-10">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>
<style scoped>
.router-link-exact-active {
  color: pink;
}
</style>
