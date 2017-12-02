import { arrayFrom } from './';

export default function(node) {
	return arrayFrom(node.children)?.length;
}
