// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');
const path = require('path');
// eslint-disable-next-line import/extensions
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, './dist/'),
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    historyApiFallback: true,
    compress: false,
    hot: true,
    host: '0.0.0.0',
    port: 6400,
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: '[name].[chunkhash:8].js',
    publicPath: '/',
  },
});
