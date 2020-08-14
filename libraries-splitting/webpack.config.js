const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {
    main: './index.js',
    vendor: [
      'moment',
      'lodash'
    ]
  },
  output: {
    filename: '[name].js',    // entry에 지정된 대로 -> main.js, vendor.js
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new ManifestPlugin({
      filename: 'manifest.json',
      basePath: './dist/'
    })
  ]

  // https://negabaro.github.io/archive/webpack-splitChunks
  // optimization: {
  //   runtimeChunk: {
  //     name: "runtime"
  //   },
  //   splitChunks: {
  //     name: "vendor",
  //     chunks: "initial"
  //   }
  // }

}