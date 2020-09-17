const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const path = require('path');


module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: 'development',
  entry: './index.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: 'static/js/[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: [".js", ".jsx", ".png", '.ts', '.tsx'],
    alias: {
      "models": path.resolve(__dirname, "src/models"),
      "@": path.resolve(__dirname, "src")
    }
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
    // new CopyWebpackPlugin([{ from: 'public/assets', to: 'assets' }]),
    // new DotenvPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg)$/,
        use: ['file-loader']
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['src']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {/* Loader options go here */}
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
}