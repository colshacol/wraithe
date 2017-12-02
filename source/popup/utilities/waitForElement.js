export default (selector: string) => {
	let iterations = 0;
	return new Promise((resolve, reject) => {
		let interval = setInterval(() => {
			const element = document.querySelector(selector);
			iterations++;

			if (element) {
				clearInterval(interval);
				resolve(element);
			}

			if (iterations >= 15) {
				clearInterval(interval);
				reject(`Didn't find that shit.`);
			}
		}, 1000);
	})
}
