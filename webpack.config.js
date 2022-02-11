const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'index.js'
  },
  module: {
    rules: [
      { test: /.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /.(c|sa|sc)ss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /.html$/, use: ['html-loader'] },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  devServer: {
    open: true
  }
}