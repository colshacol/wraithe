import { observable, action, autorun } from 'mobx';
import nanoid from 'nanoid';

import playback from './play';

const inititalizeAttempts = (events) => {
	return events.reduce((final, event) => {
		final[event.uid] = 0;
		return final;
	}, {});
}

const play = ({ events, failHandler, successHandler }) => {
	const eventsLength = events.length;
	const attempts = inititalizeAttempts(events);

	return new Promise((resolve, reject) => {
		const next = async (event, index) => {
			const attemptCount = attempts[event.uid]++;
			const result = await playback(event);

			if (result === 'failed' && attemptCount < 10) {
				if (attemptCount < 10) {
					return setTimeout(() => {
						next(event, index);
					}, 1000);
				}

				return failHandler({ event, result });
			}

			successHandler({ event, result });

			if (index !== eventsLength - 1) {
				return next(events[index + 1], index + 1);
			}

			resolve('complete!');
		}


		next(events[0], 0);
	});
}

class Records {
	@observable events = [];
	@observable recording = false;
	@observable playing = false;
	@observable paused = false;


	get eventsArray() {
		return this.events.toJS();
	}

	@action play = async () => {
		this.paused = false;
		this.playing = true;

		const events = this.eventsArray;

		const successHandler = ({ event }) => console.log('passed', event);
		const failHandler = ({ event, result }) => console.log('failed', event, result);

		const result = await play({ events, successHandler, failHandler });
	}

	@action pause = () => {
		this.paused = true;
		this.playing = false;
	}

	@action clearEvents = () => {
		this.events.clear();
	}

	@action toggleRecording = () => {
		this.recording = !this.recording;
	}



	@action remove = (uid) => {
		return () => {
			this.events = this.events.filter(event => {
				return event.uid !== uid;
			});
		}
	}

	findEventByUid = (uid) => {
		return this.events.find(event => {
			return event.uid === uid;
		})
	}

	@action edit = (uid) => {
		const _this = this;

		return {
			selector(value) {
				_this.findEventByUid(uid).selector = value;
			},

			// nickname(value) {
			// 	_this.findEventByUid(uid).nickname = value;
			// },

			options() {
				// console.log(value, uid);
			},

			selectorType({ type }) {
				_this.findEventByUid(uid).selectorType = type;
			},

			timeout() {

			},

			title() {

			}
		}
	}
}

// eventListObserver.disconnect();

function getLastElement({ selector }) {
	const elements = Array.from(document.querySelectorAll(selector) || []);
	return elements[elements.length];
}

export default Records;

// function listenForEvents({ handler }) {
// 	chrome.runtime.onMessage.addListener((event, sender, sendResponse) => {
// 		if (event.selector && event.type) {
// 			handler(event);
// 		}
// 	});
// }
