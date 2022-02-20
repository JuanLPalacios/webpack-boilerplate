const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      { 
        test: /\.js$/, 
        use: ['source-map-loader'], 
        enforce: 'pre' 
      }
    ],
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: __dirname,
    },
    compress: true,
  },
};