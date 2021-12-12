const env = require('./env')

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'zh-CN'
    },
    title: '外贸批发',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1' },
      { hid: 'description', name: 'description', content: '我是描述' },
      { hid: 'keywords', name: 'keywords', content: '我是关键词' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,300,700,900,100' },
    ],
    script: [
      { src: '/js/jquery-1.12.0.min.js', async: true},
      { src: '/js/bootstrap.min.js', async: true },
      { src: '/js/jquery.meanmenu.js', async: true },
      { src: '/js/element.js', async: true },
      { src: '/js/main.js', async: true },
    ]
  },
  // server: {
  //   port: 3001,
  //   host: '0.0.0.0'
  // },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FF0000' },
  /*
  ** Global CSS
  */
  css: [
    // '~/static/css/animate.css',
    '~/static/css/font-awesome.min.css',
    '~/static/css/bootstrap.min.css',
    '~/static/css/meanmenu.min.css',
    '~/static/css/style.css',
    '~/static/css/responsive.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '@/plugins/vue-awesome-swiper', ssr: false},
    // '@/plugins/i18n',
    // '@/plugins/bootstrap-vue'
  ],
  router: {              // customize nuxt.js router (vue-router).
    // middleware: 'i18n'   // middleware all pages of the application
  },
  /**
   * 关闭遥感采集
   */
  telemetry: false,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    // 'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: env[process.env.MODE].BASE_URL,
    browserBaseURL: env[process.env.MODE].BASE_URL,
  },
  /*
  ** Build configuration
  */
 /**
  * 取消预加载
  */
  render: {
    resourceHints: false
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    // vendor: ['vue-i18n'],
    extend (config, ctx) {
    },
    // analyze: true,
    productionSourceMap: false,
    extractCSS: {
      allChunks: true
    }
  },
  env: {
    IMAGE_URL: env[process.env.MODE].BASE_URL + '/public'
  }
}
