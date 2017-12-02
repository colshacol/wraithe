import { getAttributeValueString } from './';

export default function getAttributeString({ base = '', attributes = {} }) {
	return Object.entries(attributes).reduce((final, [key, value]) => {
		return (key !== 'class')
			? `${final}[${key}${getAttributeValueString(value)}]`
			: final;
	}, '');
}
