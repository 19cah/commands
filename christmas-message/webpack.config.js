const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './index.js',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, './build')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							importLoaders: 1,
							localIdentName: '[name]_[local]_[hash:base64]',
							sourceMap: true,
							minimize: true
						}
					}
				]
			}
		]
	},
	plugins: [new HtmlPlugin({template: './index.html'})]
};
