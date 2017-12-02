export default self => ({
	get eventCount() {
		return self.events.length;
	},

	get eventsArray() {
		return self.events.values();
	}
});
