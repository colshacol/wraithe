const eventListObserver = new MutationObserver((mutations) => {
	const [ { type, target, addedNodes } ] = mutations;

	if (type === 'childList') {
		const newEvent = Array.from(addedNodes)[0];

		newEvent && newEvent.scrollIntoView({
			behavior: 'smooth'
		});
	}
});

export default {
	start({ selector }) {
		const target = document.querySelector(selector);

		eventListObserver.observe(target, {
			attributes: false,
			childList: true,
			characterData: true
		});
	},

	stop() {
		eventListObserver.disconnect();
	}
}
