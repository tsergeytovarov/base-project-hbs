'use strict';

const path = require('path');
const webpack = require('webpack');
const options = require(path.resolve('config/kit'));

let files = {};
options.entry.js.forEach(function(file) {
  files[path.basename(file, '.js')] = './js/' + file;
});

module.exports = {
  context: path.resolve('app'),

  entry: files,

  output: {
    filename: '[name].js'
  },

  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules|build/,
      query: {
        presets: ['es2015']
      }
    }]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ]
};
