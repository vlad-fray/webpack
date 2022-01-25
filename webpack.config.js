const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[hash].js',
    },
    devServer: {
        port: 3000,
    },
    plugins: [new HTMLWebpackPlugin({ template: './public/index.html' }), new CleanWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|svg|avif|webp)/,
                use: ['file-loader'],
            },
        ],
    },
};
