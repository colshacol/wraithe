import { types } from 'mobx-state-tree';
import nanoid from 'nanoid';

import * as CONSTS from './consts';

export default types.model({
	uid: types.optional(types.string, () => nanoid(6)),
	label: CONSTS.EVENT_DEFAULT_LABEL,
	editingLabel: false,
	type: types.string,
	selector: types.string,
	creationTime: types.optional(types.Date, () => new Date()),
	selectorType: types.string,
	manuallyAdded: false,
	breakOnFailure: true,
	testResult: CONSTS.EVENT_TEST_RESULT_NONE,
	testAttempts: 0,
	timeout: CONSTA.EVENT_DEFAULT_TIMEOUT,
});
