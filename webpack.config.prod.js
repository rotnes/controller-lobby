const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(commonConfig, {
    mode: process.env.NODE_ENV,
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     inject: true,
        //     title: 'Controller Lobby',
        //     template: path.resolve(__dirname, 'src', 'index.html'),
        // }),
    ],
});
