
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"), // fixed from .dist
    filename: "[name].bundle.js",
    publicPath: "auto",
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    static: {
      directory: path.resolve(__dirname, "dist"), // fixed from .dist
    },
    client: false,
    hot:false,
    liveReload: false, // optional: keeps live reload if desired
    port: 3000,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "HostApp",
      filename: "remoteEntry.js",
      remotes: {
        // remoteApp: "remoteApp@http://localhost:3001/remoteEntry.js",
      },
      shared: ["react", "react-dom"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpeg|gif|jpg)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
