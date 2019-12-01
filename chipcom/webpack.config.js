const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, "src", "index.js"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'bundle.js',
	},

	module: {
		rules: [
			{
				test : /\.(js|jsx)$/ ,
				include : path. resolve (__dirname , "src" ) ,
				loader : 'babel-loader' ,
				exclude : /node_modules/ ,
				options : {
					presets : [ '@babel/env', '@babel/react' ],
				},
			},
		],
	},
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            filename: "index.html"
        })
    ]
};
