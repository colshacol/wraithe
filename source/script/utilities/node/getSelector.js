import {
	getAttributeString,
	getClassesString,
	getSelectorString,
	getTagName
} from './';

export default function getSelector({ node, base = '' }) {
	const attributes = getAttributeString(node);
	const classes = getClassesString(node);
	const tagName = getTagName(node);

	const selector = getSelectorString({ tagName, classes, attributes, base })

	return (!node.parent)
		? selector
		: getSelector({
			base: selector,
			node: node.parent
		});
}
