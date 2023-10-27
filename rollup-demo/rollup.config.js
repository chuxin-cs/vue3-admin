import fs from "fs";
import json from "@rollup/plugin-json";

async function getPackageProperty() {
  let param = {};
  try {
    const pack = fs.readFileSync("package.json", "utf8");
    param = JSON.parse(pack);
  } catch (error) {
    console.log(error);
  }
  return param;
}

const { main, module, browser } = await getPackageProperty();

export default {
  // 入口文件
  input: "src/index.js",
  // 出口文件
  output: [
    {
      file: main, //出口文件
      format: "cjs", //打包成CommonJS模块
    },
    {
      file: module, //出口文件
      format: "es", //打包成es module模块
    },
    {
      name: "Vue", //打包成UMD模式，需提供name
      file: browser, //出口文件
      format: "umd", //打包成UMD模块
    },
  ],
  plugins: [json()],
};
