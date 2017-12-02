import { getClassList, arrayFrom } from './';

export default function getAttributes(node) {
	return arrayFrom(node.attributes).reduce((final, { name, value }) => {
		final[name] = (name === 'class')
			? getClassList(node.classList).join(' ')
			: node.getAttribute(name);

		return final;
	}, {});
}
