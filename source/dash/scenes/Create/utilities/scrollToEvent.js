export const scrollToEvent = (uid) => {
	document.querySelector(`.event-uid-${uid}`).scrollIntoView({ behavior: 'smooth' });
}
