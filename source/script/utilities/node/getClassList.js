import { arrayFrom } from './';

export default function getClassList(node) {
	return arrayFrom(node.classList);
}
