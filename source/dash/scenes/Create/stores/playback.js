import { initializeAttempts } from './initializeAttempts';

type Event = {
	type: string;
	uid: string;
	nickname: string;
	selector: string;
};

export const playback = ({ events, handleFailure, handleSuccess }) => {
	const attempts = initializeAttempts(events);
	const eventCount = events.length;

	return new Promise((resolve, reject) => {
		const playNextEvent = async (event, index) => {
			const attemptCount = attempts[event.uid]++;
			const result = await sendEvent(event);

			if (result === 'failed' && attemptCount < 10) {
				if (attemptCount < 10) {
					return setTimeout(() => {
						playNextEvent(event, index);
					}, 1000);
				}

				return handleFailure({ event, result });
			}

			handleSuccess({ event, result });

			if (index !== eventCount - 1) {
				return playNextEvent(events[index + 1], index + 1);
			}

			resolve('complete!');
		}

		playNextEvent(events[0], 0);
	});
}

const sendEvent = (event) => {
	return new Promise((resolve, reject) => {
		const message = {
			messageType: 'eventPlayback',
			event
		}

		chrome.tabs.query({ active: true }, ([{ id }]) => {
			chrome.tabs.sendMessage(id, message, {}, ({ result }) => {
				resolve(result.status);
			})
		})
	})
}





// const next = async (event, index) => {
// 	const attemptCount = attempts[event.uid]++;
// 	const result = await playback(event);

// 	if (result === 'failed' && attemptCount < 10) {
// 		if (attemptCount < 10) {
// 			return setTimeout(() => {
// 				next(event, index);
// 			}, 1000);
// 		}

// 		return failHandler({ event, result });
// 	}

// 	successHandler({ event, result });

// 	if (index !== eventCount - 1) {
// 		return next(events[index + 1], index + 1);
// 	}

// 	resolve('complete!');
// }

