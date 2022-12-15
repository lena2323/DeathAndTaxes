const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const {
  merge,
} = require('webpack-merge');
const commonConfig = require('./webpack.common');


const prodConfig = {
  mode: 'production',
  devServer: {
    port: 8003,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:
        './dist/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
  ],
};

module.exports = merge(
  commonConfig,
  prodConfig
);