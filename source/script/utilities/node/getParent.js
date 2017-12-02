import {
	createEl,
	isBestParent
} from './';

export default function getParent(node) {
	if (isBestParent(node)) {
		return null;
	}

	return node.parentNode && createEl(node.parentNode, node);
}
