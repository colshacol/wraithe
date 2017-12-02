import { arrayFrom } from './';

export default function getChildren(node) {
	return arrayFrom(node.childNodes).map(_node => {
		return _node;
		// return createEl(_node);
	})
}
