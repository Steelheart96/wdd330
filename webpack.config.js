const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
 template: "./public/index.html",
 filename: "./index.html",
 homepage: "https://github.com/SteelHeart96/wdd330/"
});
module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
   test: /\.js$/,
   exclude: /node_modules/,
   use: {
     loader: "babel-loader"
   }
 },
  {
   test: /\.css$/,
   use: ["style-loader", "css-loader"]
  }
]},
 plugins: [htmlPlugin]
};