
const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true
  },
  entry: ["./src/js/app.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
    filename: "js/[name].js"
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
