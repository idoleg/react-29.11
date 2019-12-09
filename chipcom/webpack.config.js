const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, "src", "index.jsx"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'bundle.jsx',
	},
	module: {
		rules: [
			{
				test : /\.(js|jsx)$/ ,
				include : path. resolve (__dirname, "src" ) ,
				loader : 'babel-loader' ,
				exclude : /node_modules/ ,
				query : {
					presets : [ '@babel/env' , '@babel/react' ] ,
					plugins : [
						[
							"@babel/plugin-proposal-class-properties" ,
							{
								"loose" : true
							}
						]
					]
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader',
				],
			},
		],
	},
	resolve: {
		modules: [`${__dirname}/src`, 'node_modules'],
		extensions: ['.js', '.jsx'],
	},
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            filename: "index.html"
        })
    ]
};