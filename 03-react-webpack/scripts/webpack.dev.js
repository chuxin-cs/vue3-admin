const { merge } = require("webpack-merge");
const base = require("./webpack.base.js");

module.exports = merge(base, {
  mode: "development", // 开发模式
  devServer: {
    open: true,
    port: 7000,
  },
});
