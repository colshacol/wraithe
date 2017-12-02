const { resolve } = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const alias = require('./parts/alias');
const plugins = require('./plugins/dev');
const loaders = require('./loaders/dev');

module.exports = {
	cache: false,
	devtool: 'cheap-module-source-map',
	context: resolve(__dirname, '../source'),
	entry: {
		polyfill: 'babel-polyfill',
		background: './background/index.js',
		script: './script/index.js',
		popup: './popup/index.js',
		dash: './dash/index.js'
	},

	stats: "errors-only",
	watch: true,

	output: {
		filename: "js/[name].js",
		path: resolve(__dirname, '../extension')
	},

	module: {
		rules: loaders
	},

	resolve: {
		modules: [resolve(__dirname, '../node_modules')],
		extensions: ['.js', '.json', '.jsx', '.css', '.svg', '*.hot-update.json', '.tff', '.woff'],
		alias
	},

	plugins: [
		...plugins,
		new CleanWebpackPlugin(
			['**/*.js', '**/*.css', '**/*.css.map', '**/*.js.map'],
			{
				verbose: false,
				root: resolve(__dirname, '../extension')
			}
		)
	]
};
