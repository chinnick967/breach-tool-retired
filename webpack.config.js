var path = require('path');
var glob = require("glob");
var webpack = require('webpack');

module.exports = {
     entry: {
         scripts: glob.sync("./client/src/**/*.js"),
         styles: glob.sync("./client/src/**/*.scss")
     },
     output: {
         path: path.resolve(__dirname, 'client'),
         filename: '[name].bundle.js'
     },
     module: {
         rules: [
             {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
             },
             {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
}