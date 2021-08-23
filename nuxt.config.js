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
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: '我是描述' },
      { hid: 'keywords', name: 'keywords', content: '我是关键词' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,300,700,900,100' },
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
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css',
    '~/static/css/animate.css',
    '~/static/css/style.css',
    '~/static/css/font-awesome.min.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '@/plugins/vue-awesome-swiper', ssr: false},
    '@/plugins/bootstrap-vue'
  ],
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
    extend (config, ctx) {
    },
    // analyze: true,
    productionSourceMap: false,
    extractCSS: {
      allChunks: true
    }
  }
}
