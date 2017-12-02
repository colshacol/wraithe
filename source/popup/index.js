import React from 'react';
import ReactDOM from 'react-dom';

class Popup extends React.Component {
	handlePopoutClick = () => {
		chrome.windows.create({
			url: 'window.html',
			type: "popup",
			width: 560
		})
	}

	render({ props, state } = this) {
		return (
			<div>
				<h2>wraithe</h2>
				<button onClick={this.handlePopoutClick}>open</button>
				<hr />
				<div className="messages">
					<For each="message" of={state.messages} index="index">
						<p>{message}</p>
						<hr />
					</For>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Popup />, document.getElementById('mountPoint'));

window.addEventListener('DOMContentLoaded', function () {
  // ...query for the active tab...
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    // ...and send a request for the DOM info...
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'DOMInfo'}
        // ...also specifying a callback to be called
        //    from the receiving end (content script)
        );
  });
});
