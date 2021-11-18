export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Idea Evolver | Evolve Responsively',
    htmlAttrs: {
      lang: 'en'
    },
    // meta: [
    //   { charset: 'utf-8' },
    //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    //   {
    //     hid: 'description',
    //     name: 'description',
    //     content: 'Learn more about Idea Evolver, an audience marketing and custom software development company specializing in food, healthcare and biotech.'
    //   },
    //   // open graph tags
    //   {
    //     hid: 'description',
    //     property: 'og:title',
    //     content: 'Idea Evolver'
    //   },
    //   {
    //     hid: 'description',
    //     property: 'og:description',
    //     content: 'Learn more about Idea Evolver, an audience marketing and custom software development company specializing in food, healthcare and biotech. Evolve responsively.'
    //   },
    //   {
    //     property: 'og:image',
    //     content: 'https://storage.googleapis.com/idea-evolver.com/images/open_graph.jpg'
    //   },
    //   {
    //     property: 'og:type',
    //     content: 'website'
    //   }
    // ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'images/favicon_v2.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    '@nuxtjs/gtm',
  ],

  env: {
    GTM_ID: process.env.GTM_ID || 'GTM-MQ3RGJ',
  },

  gtm: {
    enabled: true,
    debug: false,

    id: 'GTM-MQ3RGJ',
    layer: 'dataLayer',
    variables: {},

    pageTracking: true,
    pageViewEventName: 'nuxtRoute',

    autoInit: true,
    respectDoNotTrack: true,

    scriptId: 'gtm-script',
    scriptDefer: false,
    scriptURL: 'https://www.googletagmanager.com/gtm.js',
    crossOrigin: false,

    noscript: true,
    noscriptId: 'gtm-noscript',
    noscriptURL: 'https://www.googletagmanager.com/ns.html'
  },

  publicRuntimeConfig: {
    gtm: {
      id: process.env.GTM_ID,
    }
  },

  // googleAnalytics: {
  //   id: process.env.GOOGLE_ANALYTICS_ID || 'MQ3RGJ', // Use as fallback if no runtime config is provided
  // },
  // publicRuntimeConfig: {
  //   googleAnalytics: {
  //     id: process.env.GOOGLE_ANALYTICS_ID || 'MQ3RGJ'
  //   }
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: [
      'vuelidate'
    ]
  },
  

  serverMiddleware: [
],
}
