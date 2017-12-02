import { getClassList } from './';

export default function getClassesString(node) {
	return getClassList(node.classList).length
		? '.' + node.classList.join('.')
		: ''
}
