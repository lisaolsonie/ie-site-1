<template>
  <div
    id="app"
    class="relative overflow-hidden main-content"
  >

    <Header ref="header" />
    <Nuxt class="flex-1" />
    <footer class="hidden md:block z-2 w-screen absolute bottom-12 md:bottom-0 xl:w-5/12 xl:ml-32">
      <p class="text-gray-600 text-xs text-center xl:text-left p-5 bg-transparent">&copy; 2021 IDEA EVOLVER. All rights reserved.</p>
    </footer>
    <Menu />
    <!-- <div ref="cookieNotice" class="flex flex-1 h-16 bg-gray-200 w-full fixed bottom-0 z-2 items-center px-2 text-xs lg:text-sm lg:px-36 cookieNotice">
       <p class="flex-grow">This website uses cookies to ensure you get the best experience on our website.</p>
        <button id="cookieBtn" ref="cookieBtn" class="border-2 border-gray-400 py-1 px-3 rounded bg-gray-300 hover:bg-gray-500 hover:border-gray-500 hover:text-white transition-colors cookieBtn">
          Got it!
        </button>
    </div> -->
  </div>
</template>

<script>
  import gsap from 'gsap';


export default {
  mounted() {
  //   let cookieBtn = document.getElementById("cookieBtn");

  //   gsap.from('.cookieNotice', { opacity: 0, height: 0, ease: 'ease', duration: 1 })

  //   function cookieGoAway() {
  //     gsap.to('.cookieNotice', { height: 0, opacity: 0, ease: 'ease', duration: 1 })
  //   }
  //   cookieBtn.addEventListener("click", cookieGoAway);
  }
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
  font-family: "Avenir";
  height: 100%;
}
</style>
