const Visualizer = require('webpack-visualizer-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  publicPath: '/ct1/',
  configureWebpack: {
    plugins: [
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
      new Visualizer({ filename: './statistics.html' })
    ],
    // output: {
    //   path: path.resolve(__dirname, 'dist'),
    //   filename: '[name].js',
    //   publicPath: '/ct1/',
    // },
    // optimization: {
    //   splitChunks: {
    //     chunks: "all"
    //   }
    // },
  },
  chainWebpack: (config) => {
    // A, remove the plugin
    config.plugins.delete('prefetch')
    // or:
    // B. Alter settings:
    // config.plugin('prefetch').tap(options => {
    //   options.fileBlackList.push([/myasyncRoute(.)+?\.js$/])
    //   return options
    // })
  },
  transpileDependencies: [
    // can be string or regex
    '@cityofphiladelphia/mapboard',
    '@cityofphiladelphia/phila-vue-comps',
    '@cityofphiladelphia/phila-vue-mapping',
    // '@cityofphiladelphia/phila-vue-datafetch',
    // /other-dep/
  ]
}
