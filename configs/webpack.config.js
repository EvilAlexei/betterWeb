const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

// the path(s) that should be cleaned
let pathsToClean = ['../app/build/'];

// the clean options to use
let cleanOptions = {
  root:     path.resolve(__dirname, '../app'),
  verbose:  true,
  dry:      false
};

module.exports = {
  entry: [
    './app/scripts/main.js',
    './app/styles/main.scss'
  ],
  output: {
    path: path.resolve(__dirname, '../app/build'),
    filename: 'main.bundle.js',
    publicPath: "/build/"
  },
  module: {
    rules:[
      {
        test:/\.(s*)css$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ],
    loaders: [ ]
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    //new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({
      filename: './[name].bundle.css',
      allChunks: true
    })
  ],

  stats: {
    colors: true
  },

  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: '../node_modules/'
  },

  devtool: 'false',

  devServer: {
    watchContentBase: true,
    contentBase: path.join(__dirname, "../app"),
    compress: false,
    port: 4200
  }
};
