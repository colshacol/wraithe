import {
	getId,
	getTagName,
	getChildCount,
	getChildren,
	getClassList,
	getAttributes,
	getParent
} from './';

export default (node, child = undefined) => {
	const element = {
		node,
		id: getId(node),
		specificChild: child,
		tagName: getTagName(node),
		childCount: getChildCount(node),
		children: getChildren(node),
		classList: getClassList(node),
		attributes: getAttributes(node)
	}

	element.parent = getParent(element.node, element);

	return element;
}


// this.node = node;
// this.id = getId(node.id);
// this.specificChild = child;
// this.tagName = node.tagName.toLowerCase();
// this.childCount = arrayFrom(node.childNodes).length;
// this.children = arrayFrom(node.childNodes);
// this.classList = getClassList(node.classList);
// this.attributes = getAttributes(node, node.attributes);
