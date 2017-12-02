import arrayFrom from '../arrayFrom';
import createEl from './createEl';
import getAttributes from './getAttributes';
import getAttributeString from './getAttributeString';
import getAttributeValueString from './getAttributeValueString';
import getChildCount from './getChildCount';
import getChildren from './getChildren';
import getClassesString from './getClassesString';
import getClassList from './getClassList';
import getHtmlValue from './getHtmlValue';
import getId from './getId';
import getParent from './getParent';
import getSelector from './getSelector';
import getSelectorString from './getSelectorString';
import getTextValue from './getTextValue';
import getTagName from './getTagName';
import isBestParent from './isBestParent';

export default (node) => {
	const element = createEl(node);
	const selector = getSelector({ node: element });
	return selector;
}

export { arrayFrom };
export { createEl };
export { getAttributes };
export { getAttributeString };
export { getAttributeValueString };
export { getChildCount };
export { getChildren };
export { getClassesString };
export { getClassList };
export { getHtmlValue };
export { getId };
export { getParent };
export { getSelector };
export { getSelectorString };
export { getTextValue };
export { getTagName };
export { isBestParent };
