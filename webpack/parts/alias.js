const { resolve } = require('path');

console.log(__dirname, resolve(__dirname, '../../source/styles'));
module.exports = {
	'@script/scenes': resolve(__dirname, '../../source/script/comps'),
	'@script/comps': resolve(__dirname, '../../source/script/comps'),
	'@script/styles': resolve(__dirname, '../../source/script/styles/'),
	'@script/stores': resolve(__dirname, '../../source/script/stores'),
	'@script/utilities': resolve(__dirname, '../../source/script/utilities'),
	'@script/assets': resolve(__dirname, '../../source/script/assets'),
	'@script/svgs': resolve(__dirname, '../../source/script/assets/svgs'),
	'@script/fonts': resolve(__dirname, '../../source/script/assets/fonts'),
	'@script/images': resolve(__dirname, '../../source/script/assets/images'),

	'@popup/scenes': resolve(__dirname, '../../source/popup/comps'),
	'@popup/comps': resolve(__dirname, '../../source/popup/comps'),
	'@popup/styles': resolve(__dirname, '../../source/popup/styles/'),
	'@popup/stores': resolve(__dirname, '../../source/popup/stores'),
	'@popup/utilities': resolve(__dirname, '../../source/popup/utilities'),
	'@popup/assets': resolve(__dirname, '../../source/popup/assets'),
	'@popup/svgs': resolve(__dirname, '../../source/popup/assets/svgs'),
	'@popup/fonts': resolve(__dirname, '../../source/popup/assets/fonts'),
	'@popup/images': resolve(__dirname, '../../source/popup/assets/images'),

	'@dash/scenes': resolve(__dirname, '../../source/dash/scenes'),
	'@dash/comps': resolve(__dirname, '../../source/dash/comps'),
	'@dash/styles': resolve(__dirname, '../../source/dash/styles/'),
	'@dash/stores': resolve(__dirname, '../../source/dash/stores'),
	'@dash/utilities': resolve(__dirname, '../../source/dash/utilities'),
	'@dash/assets': resolve(__dirname, '../../source/dash/assets'),
	'@dash/svgs': resolve(__dirname, '../../source/dash/assets/svgs'),
	'@dash/fonts': resolve(__dirname, '../../source/dash/assets/fonts'),
	'@dash/images': resolve(__dirname, '../../source/dash/assets/images')
};
