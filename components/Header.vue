<template>
  <header id="header" class="w-full py-6 lg:py-12 z-40">
    <div
      id="header-container"
      class="flex justify-between items-center mx-6 md:mx-16 xl:mx-40"
    >
      <div id="header-logo">
        <nuxt-link to="/">
          <img class="w-28 lg:w-40" src="/images/logo.svg" alt="Idea Evolver Logo" rel="preload"/>
        </nuxt-link>
      </div>
      <nav id="header-links" class="hidden xl:inline-block">
        <ul class="flex">
          <li
            id="search-behavior-analysis"
            class="mr-12 text-gray-700 text-md hover:text-gray-500 transition ease-in duration-150 hover:border-b border-blue-500"
          >
            <nuxt-link to="/search-behavior-analysis">
              Search Behavior Analysis
            </nuxt-link>
          </li>
          <li
            id="software-development"
            class="mr-12 text-gray-700 text-md hover:text-gray-500 transition ease-in duration-150 sd"
          >
            <nuxt-link to="/software-development">
              Software Development
            </nuxt-link>
          </li>
          <li
            id="search-experience-marketing"
            class="mr-12 text-gray-700 text-md hover:text-gray-500 transition ease-in duration-150 sem"
          >
            <nuxt-link to="/search-experience-marketing">
              Search Experience Marketing
            </nuxt-link>
          </li>
          <li
            id="about"
            class="mr-12 text-gray-700 text-md hover:text-gray-500 transition ease-in duration-150 ab"
          >
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li
            id="careers"
            class="mr-12 text-gray-700 text-md hover:text-gray-500 transition ease-in duration-150 car"
          >
            <nuxt-link to="/careers">Careers</nuxt-link>
          </li>
          <li
            id="contact"
            class="mr-0 text-gray-700 text-md hover:text-gray-500 transition ease-in duration-150 con"
          >
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
        </ul>
      </nav>
      <button
        id="mobile-hamburger"
        aria-label="Toggle menu"
        @click="toggleMenu"
        class="relative inline-block float-right rounded-sm focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-400 focus:ring-opacity-60 xl:hidden"
      >
        <svg
          class="h-8 w-8 text-gray-400 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.$nuxt.$emit("toggleMenu");
    },
  },
};
</script>

<style>
ul > li::after {
  content: '';
  display: block;
  width: calc(100% + 2px);
  height: 5px;
  border-radius: 4px;
  -webkit-transform-origin: right;
  transform-origin: right;
  -webkit-transform: scale(0, 1);
  transform: scale(0, 1);
  transition: transform 0.3s;
}

ul > li:hover::after {
  width: 100%;
  -webkit-transform-origin: left;
  transform-origin: left;
  -webkit-transform: scale(1, 1);
  transform: scale(1, 1);
}

a.nuxt-link-active {
  border-radius: 2px;
}

#search-behavior-analysis a.nuxt-link-active {
  border-bottom: 5px solid #65D8B4;
}

#software-development a.nuxt-link-active {
  border-bottom: 5px solid #966CE0;
}

#search-experience-marketing a.nuxt-link-active {
  border-bottom: 5px solid #4F77FF;
}

#about a.nuxt-link-active {
  border-bottom: 5px solid #4BBFE1;
}

#careers a.nuxt-link-active {
  border-bottom: 5px solid #DF5FBE;
}

#contact a.nuxt-link-active {
  border-bottom: 5px solid #EFCB57;
}

#search-behavior-analysis::after {
  background-color: #65D8B4;
}

#software-development::after {
  background-color: #966CE0;
}

#search-experience-marketing::after {
  background-color: #4F77FF;
}

#about::after {
  background-color: #4BBFE1;
}

#careers::after {
  background-color: #DF5FBE;
}

#contact::after {
background-color: #EFCB57;
}
</style>