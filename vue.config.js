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
  transpileDependencies: [
    // can be string or regex
    '@cityofphiladelphia/mapboard',
    '@cityofphiladelphia/phila-vue-comps',
    '@cityofphiladelphia/phila-vue-mapping',
    // '@cityofphiladelphia/phila-vue-datafetch',
    // /other-dep/
  ]
}
