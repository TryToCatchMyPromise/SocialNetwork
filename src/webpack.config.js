const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: './dist',
    publicPath: 'dist/',

    // filename: '[name].[contenthash].js',
    // chunkFilename: '[name].bundle.js',
    // path: path.resolve(__dirname, 'dist'),

  },
  resolve: {
    extensions: [".js", ".jsx", ".png"],
    alias: {
      "models": path.resolve(__dirname, "src/models"),
      "@": path.resolve(__dirname, "src")
    }
  },
  plugins: [
      new HTMLWebpackPlugin({
        title: 'My social network',
        template: "./index.html"
      }),
      new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png | jpg | svg | gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf | woff | woff2 | eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.(xml)$/,
        use: ['xml-loader']
      }
    ]
  }

}