require("regenerator-runtime")

type Event = {
	type: string;
	uid: string;
	nickname: string;
	selector: string;
};

// function* playback(events: Event[]) {
// 	for (let event of events) {
// 		const result = yield sendEvent(event);
// 	}
// }

async function playback(event) {
	return await sendEvent(event);
}

const sendEvent = (() => {
	let backgroundPage;

	chrome.runtime.getBackgroundPage(page => {
		backgroundPage = page;
	});

	return (event) => {
		return new Promise((resolve, reject) => {

			const message = {
				messageType: 'eventPlayback',
				event
			}

			chrome.tabs.query({ active: true }, ([{ id }]) => {
				chrome.tabs.sendMessage(id, message, {}, ({ result }) => {
					// if (result.status === 'success') {
						return resolve(result.status);
					// } else {
						// return reject(result.status);
					// }
				})
			})
		})
	}
})();

export default playback;
