const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "app.js",
        chunkFilename: '[name].bundle.js',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env", "@babel/react"],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
        ]
    },
    devServer: {
        open: 'firefox'
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            filename: "index.html"
        })
    ]
}