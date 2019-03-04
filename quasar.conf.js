// Configuration for your app

module.exports = function (context) {
  const env = require('./.env.js')

  return {
    boot: [
      'components',
      'dev',
      'i18n',
      'message',
      'service',
      'util',
      'vuelidate'
    ],

    css: [
      'app.styl'
    ],

    extras: [
      'roboto-font',
      'material-icons' // optional, you are not bound to it
      // 'ionicons',
      // 'mdi',
      // 'fontawesome'
    ],
    supportIE: true,

    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      publicPath: String(env.build.PUBLIC_PATH).replace(/'/g, ''),
      sourceMap: false,
      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        })

        cfg.module.rules.push({
          test: /\.(view\.js)$/,
          use: ['vue-hot-reload-loader']
        })

        cfg.resolve.alias['vue$'] = 'vue/dist/vue.esm.js'
      },
      env: env
    },

    devServer: {
      // https: true,
      port: 8000,
      open: false // opens browser window automatically
    },

    // framework: 'all' --- includes everything; for dev only!
    framework: {
      components: [
        'QSpace',
        'QAjaxBar',
        'QLayout',
        'QPageContainer',
        'QPage',
        'QHeader',
        'QFooter',
        'QDrawer',
        'QPageSticky',
        'QToolbar',
        'QToolbarTitle',
        'QList',
        'QItem',
        'QItemSection',
        'QItemLabel',
        'QSeparator',
        'QBtn',
        'QIcon',
        'QField',
        'QInput',
        'QCheckbox',
        'QSelect',
        'QRadio',
        'QCard',
        'QCardSection',
        'QCardActions',
        'QPopupProxy',
        'QScrollArea',
        'QDate',
        'QTable',
        'QTd',
        'QAvatar',
        'QImg'
      ],

      directives: [
        'Ripple'
      ],

      // Quasar plugins
      plugins: [
        'Dialog',
        'AppFullscreen',
        'Notify',
        'Loading',
        'LocalStorage',
        'SessionStorage'
      ],
      // iconSet: ctx.theme.mat ? 'material-icons' : 'ionicons'
      i18n: 'en-us' // Quasar language
    },
    // animations: 'all' --- includes all animations
    animations: [],

    ssr: {
      pwa: false
    },

    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {},
      manifest: {
        // name: 'Quasar App',
        // short_name: 'Quasar-PWA',
        // description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },

    cordova: {
      // id: 'org.cordova.quasar.app'
    },

    electron: {
      // bundler: 'builder', // or 'packager'
      extendWebpack (cfg) {
        // do something with Electron process Webpack cfg
      },
      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Window only
        // win32metadata: { ... }
      },
      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'quasar-app'
      }
    }
  }
}
