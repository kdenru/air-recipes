import * as path from "path";
import merge from "webpack-merge";

import common from "./webpack.common";

import * as webpack from "webpack";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = merge(common, {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    publicPath: "/",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.styl|css$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
    ],
  },
  devtool: "source-map",
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
});

export default config;
