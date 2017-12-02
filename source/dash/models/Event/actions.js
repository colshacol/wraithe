import calculateMaxTestAttempts from './utilities/calculateMaxTestAttempts';
import sendEvent from './utilities/sendEvent';
import * as CONSTS from './consts';

export default self => {
	// NOTE: Non-observable values.
	let testResult = CONSTS.EVENT_TEST_RESULT_NONE;
	let maxTestAttempts = calculateMaxTestAttempts()
	let testAttemptCount = 0;

	return {
		set: {
			label(label: string) {
				self.label = label;
			},

			selector(selector: string) {
				self.selector = selector;
			},

			selectorType(selectorType: string) {
				self.selectorType = selectorType;
			},

			type(type: string) {
				self.type = type;
			},

			testAttempts(testAttempts: number) {
				testAttempts = testAttempts;
			},

			testResult(testResult: string) {
				testResult = testResult;
			}
		},

		async play() {
			const result = await sendEvent(event);
			self.set.testAttempts(event.testAttempts + 1);

			return new Promise((resolve, reject) => {
				if (result === CONSTS.EVENT_TEST_RESULT_FAILED) {
					if (testAttemptCount >= maxTestAttempts) {
						self.set.testResult(CONSTS.EVENT_TEST_RESULT_FAILED);

						return reject({
							event: self.toJSON(),
							status: CONSTS.EVENT_TEST_RESULT_FAILED
						});
					}

					return setTimeout(() => {
						resolve(self.play());
					}, 500);
				}

				self.set.testResult(CONSTS.EVENT_TEST_RESULT_PASSED);

				resolve({
					event: self.toJSON(),
					status: CONSTS.EVENT_TEST_RESULT_PASSED
				});
			});
		}
	};
};
