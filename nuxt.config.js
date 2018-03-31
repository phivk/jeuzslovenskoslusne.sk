module.exports = {
  /*
  ** Router 
  */
  router: {
    middleware: 'i18n'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Je už Slovensko slušné?',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '26. februára 2018 sa svet dozvedel o vražde investigatívneho novinára Jána Kuciaka a jeho snúbenice Martiny Kušnírovej. Doteraz čakáme na nezávislé vyšetrenie vraždy a vládu bez prepojení na organizovaný zločin.' },
      { name: 'application-name',                content: 'Je už Slovensko slušné?' },
      { name: 'msapplication-TileColor',         content: '#FFFFFF'  },
      { name: 'msapplication-TileImage',         content: 'mstile-144x144.png'  },
      { name: 'msapplication-square70x70logo',   content: 'mstile-70x70.png'  },
      { name: 'msapplication-square150x150logo', content: 'mstile-150x150.png'  },
      { name: 'msapplication-wide310x150logo',   content: 'mstile-310x150.png'  },
      { name: 'msapplication-square310x310logo', content: 'mstile-310x310.png'  },
      { property:'og:url',                       content: 'https://jeuzslovenskoslusne.sk' },
      { property:'og:type',                      content: 'website' },
      { property:'og:title',                     content: 'Je už Slovensko slušné?' },
      { property:'og:description',               content: '26. februára 2018 sa svet dozvedel o vražde investigatívneho novinára Jána Kuciaka a jeho snúbenice Martiny Kušnírovej. Doteraz čakáme na nezávislé vyšetrenie vraždy a vládu bez prepojení na organizovaný zločin.' },
      { property:'og:image',                     content: '/og-image-1200x1200.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon-precomposed', sizes: '57x57',   href: 'apple-touch-icon-57x57.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: 'apple-touch-icon-114x114.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '72x72',   href: 'apple-touch-icon-72x72.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: 'apple-touch-icon-144x144.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '60x60',   href: 'apple-touch-icon-60x60.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: 'apple-touch-icon-120x120.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '76x76',   href: 'apple-touch-icon-76x76.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: 'apple-touch-icon-152x152.png' },
      { rel: 'icon', type: 'image/png',      sizes: '196x196', href: 'favicon-196x196.png' },
      { rel: 'icon', type: 'image/png',      sizes: '96x96',   href: 'favicon-96x96.png' },
      { rel: 'icon', type: 'image/png',      sizes: '32x32',   href: 'favicon-32x32.png' },
      { rel: 'icon', type: 'image/png',      sizes: '16x16',   href: 'favicon-16x16.png' },
      { rel: 'icon', type: 'image/png',      sizes: '128x128', href: 'favicon-128.png' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~static/css/tachyons.min.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/i18n.js',
  ],
  /*
  ** Generate configuration
  */
  generate: {
    minify: false,
    routes: [
      '/en'
    ],
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['vue-i18n']
  }
}
