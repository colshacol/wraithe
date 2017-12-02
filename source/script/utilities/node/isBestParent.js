import { getId } from './';

export default function isBestParent(node) {
	return (getId(node) ||	node.tagName === 'BODY');
}
