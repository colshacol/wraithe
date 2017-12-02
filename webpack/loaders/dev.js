const ExtractTextPlugin = require('extract-text-webpack-plugin');

const babelLoader = {
	test: /\.(js)$/,
	exclude: /(node_modules)/,
	use: [{ loader: 'babel-loader', options: {} }]
};

const cssLoader = {
	test: /\.(css)$/,
	exclude: /node_modules/,
	use: ExtractTextPlugin.extract({
		fallback: 'style-loader',
		use: [
			{
				loader: 'css-loader',
				options: {
					modules: true,
					importLoaders: 1,
					localIdentName: '[name]_[local]'
				}
			},
			{
				loader: 'postcss-loader',
				options: {}
			}
		]
	})
};

const jsonLoader = {
	test: /\.json$/,
	exclude: /node_modules/,
	use: 'json-loader'
};

const fileLoader = {
	test: /\.(otf|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
	loader: 'url-loader'
};

const svgLoader = {
	test: /\.svg$/,
	use: [
		{
			loader: 'babel-loader'
		},
		{
			loader: 'react-svg-loader',
			options: {
				jsx: true
			}
		}
	]
};

module.exports = [babelLoader, cssLoader, jsonLoader, fileLoader, svgLoader];
