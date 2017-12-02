export default ({ events, uid }) => {
	return events.filter(event => {
		return event.uid !== uid;
	});
}
