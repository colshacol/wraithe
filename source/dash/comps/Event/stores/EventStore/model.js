import { types } from 'mobx-state-tree';

export default types.model({
	viewingSelectorSearch: false,
	hoveringSelector: false,
	editingLabel: false,

	// NOTE: Must be explicitly provided.
	currentLabel: types.string,
	originalLabel: types.string,
	currentSelector: types.string,
	originalSelector: types.string,
	props: types.object,
});
