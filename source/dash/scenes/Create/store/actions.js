import createEvent from '@dash/utilities/createEvent';
import Event from '../../../models/Event';

export default self => ({
	addEvent(event) {
		if (self.state === 'recording') {
			const _event = Event.create(event);
			self.events.set(_event.uid, _event)
		}
	},

	// NOTE: Manually adds an event.
	insertEvent() {
		const event = createEvent();
		self.events.set(event.uid, event);
	},

	removeEvent(event) {
		self.events.delete(event.uid);
	},

	clearEvents() {
		if (self.state === 'idle') {
			self.events.clear();
		}
	},

	togglePlaying() {
		if (self.state !== 'recording') {
			if (self.state === 'idle') {
				self.resetEventsTestResults();
				self.state = 'playing';
				self.play()
			} else {
				self.state = 'idle';
			}
		}
	},

	toggleRecording() {
		if (self.state !== 'playing') {
			self.state = (self.state === 'idle')
				? 'recording'
				: 'idle';
		}
	},

	resetEventsTestResults() {
		self.events.forEach(event => {
			event.setTestResult('');
		})
	},

	async playNext(event, index) {
		const result = await event.play();

		const nextIndex = index + 1;
		const nextEvent = self.events.values()[nextIndex];

		if (nextEvent) {
			return self.playNext(nextEvent, nextIndex);
		} else {
			self.togglePlaying();
			return { status: 'complete' }
		}
	},

	async play(event) {
		const events = self.events.values();
		const results = await self.playNext(events[0], 0);

		console.log(results);
	}
});
