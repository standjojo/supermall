module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@':  __dirname + '\\src',
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'views': '@/views',
        'network': '@/network',
      }
    }
  },
  publicPath: './'
}


