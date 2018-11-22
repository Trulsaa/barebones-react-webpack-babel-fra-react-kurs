const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.html$/, exclude: /node_modules/, loader: "file-loader" }

    ]
  },
  plugins: [new HtmlWebpackPlugin()]
};
