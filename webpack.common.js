// eslint-disable-next-line import/no-extraneous-dependencies
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/', 'index.jsx'),
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
      favicon: './src/favicon.ico',
      template: path.resolve(__dirname, './src/index.html'), // template file
      filename: 'index.html', // output file
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      formatter: 'table',
      fix: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                ['@babel/preset-env', { targets: 'defaults' }],
                '@babel/preset-react',
              ],
            },
          },
        ],
      },
      { test: /\.(tsx|ts)$/, loader: 'ts-loader' },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                indentWidth: 2,
                includePaths: ['src/styles'],
              },
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)(\?.*)?$/,
        type: 'asset',
      },
      {
        test: /\.(svg|png)$/,
        type: 'asset',
      },
    ],
  },
  optimization: {
    minimize: false,
    usedExports: true,
  },
  performance: {
    hints: false,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      Src: path.resolve(__dirname, './src'),
    },
  },
};
