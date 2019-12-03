const path = require("path");
const htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './index.js',
    },
    context: path.resolve(__dirname, "src"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'app.js',
    },
    plugins: [
        new htmlWebPackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            filename: "index.html"
        })
    ]
};