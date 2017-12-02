import { observable, action, computed } from 'mobx';
import nanoid from 'nanoid';

import { playback } from './playback';
import { scrollToEvent } from '../utilities/scrollToEvent';
import listenForEvents from '../utilities/listenForEvents';
import findEventByUid from '../utilities/findEventByUid';
import removeEventByUid from '../utilities/removeEventByUid';

export default class CreateStore {

	@action markEventPassed = (uid) => {
		findEventByUid(this.eventList, uid).testResult = 'passed';
		scrollToEvent(uid);
	}

	@action markEventFailed = (uid) => {
		findEventByUid(this.eventList, uid).testResult = 'failed';
		scrollToEvent(uid);
	}

	@action resetEventsTestResults = () => {
		this.eventList.forEach(event => {
			event.testResult = '';
		});
	}

	@action play = async () => {
		console.log('[ ----- playing ]')
		if (!this.state.current) {
			this.resetEventsTestResults();
			this.state.current = 'playing';

			const events = this.eventsArray;
			const handleSuccess = ({ event, result }) => this.markEventPassed(event.uid);
			const handleFailure = ({ event, result }) => this.markEventFailed(event.uid);
			const result = await playback({ events, handleSuccess, handleFailure });
			console.log('@play result: ', result);
			this.stop();
		}
	}

	@action record = () => {
		if (!this.state.current) {
			this.state.current = 'recording';
		} else if (this.state.current === 'recording') {
			this.state.current = false;
		}
	}

	@action stop = () => {
		if (this.state.current === 'playing') {
			this.state.current = false;
		}
	}

	// @action clearEventList = () => {
	// 	if (this.eventList.length > 0) {
	// 		this.eventList.clear();
	// 	}
	// }

	// @action toggleRecording = () => {
	// 	this.state.recording = !this.state.recording;
	// }

	// @action removeEvent = (uid) => {
	// 	return () => {
	// 		this.eventList = removeEventByUid({
	// 			events: this.eventList,
	// 			uid
	// 		})
	// 	}
	// }

	// @action addNewEvent = (event) => {
	// 	if (this.state.current === 'recording' || event.isManualEvent) {
	// 		this.eventList.push({
	// 			...event,
	// 			isManualEvent: false,
	// 			time: Date.now(),
	// 			uid: nanoid(4),
	// 			nickname: '',
	// 			testResult: ''
	// 		})

	// 		console.log(this.eventList[0]);
	// 		this.eventList[0].logThem();
	// 	}
	// }

	// @action manuallyAddEvent = () => {
	// 	this.eventList.push({
	// 		selector: 'div.with.classes > [and="attributes"]',
	// 		isManualEvent: true,
	// 		selectorType: 'css',
	// 		time: Date.now(),
	// 		uid: nanoid(4),
	// 		type: 'click',
	// 		testResult: ''
	// 	})
	// }

	// @action editEvent = (uid) => {
	// 	const event = findEventByUid(this.eventList, uid);
	// 	const _this = this;

	// 	return {
	// 		selector(value) {
	// 			event.selector = value;
	// 		},

	// 		nickname(value) {
	// 			event.nickname = value;
	// 		},

	// 		selectorType({ type }) {
	// 			event.selectorType = type;
	// 		}
	// 	}
	// }
}
