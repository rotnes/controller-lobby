const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(commonConfig, {
    mode: process.env.NODE_ENV,
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            title: 'Controller Lobby',
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
    ],
});
