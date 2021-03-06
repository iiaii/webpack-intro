const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  // alias
  // resolve: {
  //   alias: {
  //     Vendor: path.resolve(__dirname, './app/vendor/')
  //   }
  // }

  // Provide Plugin
  plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery'
      })
  ]
};