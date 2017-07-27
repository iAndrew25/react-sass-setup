const webpack = require('webpack'),
	path = require('path'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ReactRootPlugin = require('html-webpack-react-root-plugin');

module.exports = {
	entry: './index.js',
	output: {
		path: __dirname + '/build',
		filename: 'script.js'
	},
	watch: true,
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env', 'react']
				}
			}
		}, {
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader'],
			})
		}],
	},
	plugins: [
		new webpack.ProvidePlugin({
			'React': 'react',
		}),
		new ExtractTextPlugin('style.css'),
		new HtmlWebpackPlugin(),
		new ReactRootPlugin
	],
}