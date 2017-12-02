import { types } from 'mobx-state-tree';

import Event from '../../../models/Event';

export default types.model({
	events: types.map(Event),
	state: 'idle' // 'playing' 'recording' 'idle'
});
