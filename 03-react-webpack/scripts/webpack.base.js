const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/main.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash:8].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"), // 使用自定义模板
    }),
  ],
};
