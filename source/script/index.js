import elGrabber from './utilities/node';

document.addEventListener('click', (event) => {
	chrome.runtime.sendMessage({
		selector: elGrabber(event.target),
		type: 'click'
	});
});

document.addEventListener('keypress', (event) => {
	chrome.runtime.sendMessage({
		selector: elGrabber(event.target),
		type: 'keypress'
	});
});

document.addEventListener('change', (event) => {
	chrome.runtime.sendMessage({
		selector: elGrabber(event.target),
		type: 'change'
	});
});

document.addEventListener('focus', (event) => {
	chrome.runtime.sendMessage({
		selector: elGrabber(event.target),
		type: 'focus'
	});
});

document.addEventListener('select', (event) => {
	chrome.runtime.sendMessage({
		selector: elGrabber(event.target),
		type: 'select'
	});
});

document.addEventListener('toggle', (event) => {
	chrome.runtime.sendMessage({
		selector: elGrabber(event.target),
		type: 'toggle'
	});
});

document.addEventListener('submit', (event) => {
	chrome.runtime.sendMessage({
		selector: elGrabber(event.target),
		type: 'submit'
	});
});

document.addEventListener('copy', (event) => {
	chrome.runtime.sendMessage({
		selector: elGrabber(event.target),
		type: 'copy'
	});
});

document.addEventListener('cut', (event) => {
	chrome.runtime.sendMessage({
		selector: elGrabber(event.target),
		type: 'cut'
	});
});

document.addEventListener('paste', (event) => {
	chrome.runtime.sendMessage({
		selector: elGrabber(event.target),
		type: 'paste'
	});
});


