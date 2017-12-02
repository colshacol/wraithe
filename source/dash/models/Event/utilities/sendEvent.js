export default (event) => {
	return new Promise((resolve, reject) => {
		const message = {
			messageType: 'eventPlayback',
			event
		}

		chrome.tabs.query({ active: true }, ([{ id }]) => {
			chrome.tabs.sendMessage(id, message, {}, (result) => {
				resolve(result.status);
			})
		})
	})
}

