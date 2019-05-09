const webpack = require('webpack');
const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const isDev = process.env.NODE_ENV === 'development';

const webpackConfig = {
  mode: process.env.NODE_ENV,
  entry: ['babel-polyfill', './lib/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    sourceMapFilename: 'index.map',
    library: '', //设置库的名称
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [],
  resolve: {
    extensions: ['.js'],
  },
};

if (isDev) {
  webpackConfig.plugins.push(new NodemonPlugin());
}

module.exports = webpackConfig;
