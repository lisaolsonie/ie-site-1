<template>
  <div id="app" class="relative min-h-screen min-h-none flex flex-col">

    <Header ref="header" />
    <Nuxt class="flex-1" />
    <Menu />
  </div>
</template>

<script>
  import gsap from 'gsap';


export default {
}
</script>

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
  background-color: #f8f8f8;
  font-family: "Avenir";
  overflow: scroll;
}
</style>
