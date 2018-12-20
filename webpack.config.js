var path = require('path');
var glob = require("glob");
var webpack = require('webpack');

module.exports = {
     entry: {
         js: glob.sync("./client/**/*.js")
     },
     output: {
         path: path.resolve(__dirname, 'client'),
         filename: 'main.bundle.js'
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
}