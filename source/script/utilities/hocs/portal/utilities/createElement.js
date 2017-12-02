type OptionsT = {
	attributes: Object,
	tagName: string
}

export default (options: OptionsT) => {
	const mountPoint = document.createElement(options.tagName);

	Object.entries(options.attributes).forEach(([ name, value ]) => {
		mountPoint.setAttribute(name, value);
	});

	return mountPoint;
}
