import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import { Main } from '@dash/comps/Main';
import { Header } from '@dash/comps/Header';
import { Body } from '@dash/comps/Body';
import { EventList } from '@dash/comps/EventList';
import HeaderIcons from './HeaderIcons';
import CreateStore from '../store';
import withStore from '@dash/utilities/withStore';

import '../styles/Create.css';

const Create = (props) => {
	const { createStore } = props;

	return (
		<div styleName="Create">
			<Main>
				<Header title="Create">
					<HeaderIcons
						storeState={createStore.state}
						eventCount={createStore.events.size}
						clearEvents={createStore.clearEvents}
						togglePlaying={createStore.togglePlaying}
						toggleRecording={createStore.toggleRecording}
					/>
				</Header>
				<Body>
					<EventList
						insertEvent={createStore.insertEvent}
						removeEvent={createStore.removeEvent}
						events={createStore.events}
					/>
				</Body>
			</Main>
		</div>
	);
}



const ws = (_store) => (Comp) => {
	return @observer class LocalStoreProvider extends React.Component {
		store = _store.create({
			events: {}
		});

		componentDidMount() {
			chrome.runtime.onMessage.addListener((event, sender, sendResponse) => {
				if (event.selector && event.type) {
					this.store.addEvent(event);
				}
			});
		}

		render({ store, props } = this) {
			return (
				<Comp {...props} createStore={this.store} />
			)
		}
	};
}

export default ws(CreateStore)(observer(Create))
