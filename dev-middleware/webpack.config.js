const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'none',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dis'),
        publicPath: 'http://localhost:3000/dist'
    },
};