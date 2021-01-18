import * as webpack from "webpack";

const config: webpack.Configuration = {
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
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
    ],
  },
};

export default config;
