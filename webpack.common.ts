import * as webpack from "webpack";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

const config: webpack.Configuration = {
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    // @ts-ignore https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/61
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ["ts-loader", "eslint-loader"],
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]",
        },
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        use: ["file-loader"],
      },
    ],
  },
};

export default config;
