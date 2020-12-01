const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', //шлях до точки входу відносно даного файлу налаштувань
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'//назва файлу, куди буде записано весь код з усіх файлів js
    },
    module: {
        rules: [
            {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: "babel-loader"
            },
            {
              test: /\.s[ac]ss$/i,
              use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'styles.css' }),
        new HtmlWebpackPlugin({ template: "./src/index.html" })
    ],
    devServer: {
          port: 9000
        }
};