export default function getSelectorString({ tagName, classes, attributes, base }) {
	return `${tagName}${classes}${attributes} ${base}`.trim();
}
