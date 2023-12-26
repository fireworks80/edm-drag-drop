const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: {
		app: './src/index.js',
	},
	module: {
		rules: [
			{
				test: /\.css/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.html$/,
				loader: 'raw',
			},
		],
	},
	devServer: {
		static: {
			directory: resolve(__dirname, 'dist'),
		},
		port: 3000,
		compress: true,
		open: true,
		hot: true,
		watchFiles: {
			paths: ['src/index.html'],
		},
		client: {
			logging: 'info',
		},
	},
	stats: 'errors-only',
	devtool: 'inline-source-map',
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			title: 'Development',
			template: './src/index.html',
			templateParameters: {
				env: process.env.NODE_ENV === 'development' ? '(개발용)' : '',
			},
			hash: true,
		}),
		new CleanWebpackPlugin(),
	],
	output: {
		filename: '[name].bundle.js',
		path: resolve(__dirname, './dist'),
		clean: true,
	},
	target: 'web',
	optimization: {
		runtimeChunk: 'single',
	},
};
