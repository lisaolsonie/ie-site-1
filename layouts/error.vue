<template>
  <div class="text-center items-center screenHeightCalc">
    <h1 class="" v-if="error.statusCode === 404">Page not found</h1>
    <h1 class="" v-else>An error occurred</h1>
    <NuxtLink class="hover:text-gray-500 transition ease-in duration-150 hover:border-b homeLink" to="/">Home page</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error'
  }
</script>

<style scoped>
  footer {
    bottom: 0;
    position: absolute;
  }
  .screenHeightCalc {
    height: calc(100vh - 12rem);
  }
  .homeLink {
    margin: 2rem 0;
    border-bottom: 3px solid #68BADD;
  }
</style>