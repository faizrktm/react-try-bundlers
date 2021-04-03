const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_PATH = path.resolve(__dirname, 'src');

module.exports = {
  entry: APP_PATH,
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: path.join(__dirname, 'src'),
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'template.html'
  })],
};
