<template>
  <div
    id="app"
    class="relative h-screen flex flex-col overflow-hidden"
  >

    <Header ref="header" />
    <Nuxt class="flex-1" />
    <footer class="z-2 w-screen absolute bottom-0 xl:w-5/12 xl:ml-32">
      <p class="text-gray-600 text-xs text-center xl:text-left p-5 bg-transparent">&copy; 2021 IDEA EVOLVER. All rights reserved.</p>
    </footer>
    <Menu />
  </div>
</template>

<style>
export default {
  transition: "default"
}

.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

@font-face {
  font-family: "Nunito";
  src: url("/fonts/nunito-regular.woff") format("woff"),
    url("/fonts/nunito-regular.woff2") format("woff2"),
    url("/fonts/nunito-regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Avenir";
  src: url("/fonts/avenir-book.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Avenir";
  src: url("/fonts/avenir-black.otf") format("opentype");
  font-weight: 700;
  font-style: normal;
}

::selection {
  background-color: rgb(242, 242, 242);
}

body {
  /* @apply bg-gray-100; */
  font-family: "Avenir";
}
</style>
