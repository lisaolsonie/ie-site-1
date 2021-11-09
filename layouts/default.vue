<template>
  <div
    id="app"
    class="relative overflow-hidden main-content"
  >

    <Header ref="header" />
    <Nuxt class="flex-1" />
    <footer class="hidden md:block z-2 w-screen absolute bottom-12 md:bottom-0">
      <p class="text-gray-600 text-xs text-center w-screen text-center p-5 bg-transparent">&copy; 2021 IDEA EVOLVER. All rights reserved.</p>
    </footer>
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
@font-face {
  font-family: "Avenir Heavy";
  src: url("//db.onlinewebfonts.com/t/901497541657a2f24e42848bcf7fad52.eot");
  font-weight: 900;
  font-style: bold;
}
::selection {
  background-color: rgb(242, 242, 242);
}
body {
  /* @apply bg-gray-100; */
  font-family: "Avenir";
  height: 100%;
}
</style>