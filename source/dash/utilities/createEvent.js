import Event from '../models/Event';

export default () => Event.create({
	selector: 'div:nth-of-type(2) > .some-class',
	creationTime: Date.now(),
	selectorType: 'css',
	manuallyAdded: true,
	type: 'click',
});
