export default (events, uid) => {
	return events.find(event => {
		return event.uid === uid;
	})
}
