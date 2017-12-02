export const initializeAttempts = (events) => {
	return events.reduce((final, event) => {
		final[event.uid] = 0;
		return final;
	}, {});
}
