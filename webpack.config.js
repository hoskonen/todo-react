const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const entry = {
  entry: './src/index.js'
}

const output = {
  path: path.join(__dirname, './dist'),
  filename: 'index.bundle.js'
}

const _module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader']
    }
  ]
}

const plugins = [new htmlWebpackPlugin({template: './src/index.html'})]

// Common JS
module.exports = {
  entry,
  output,
  module: _module,
  plugins
}
