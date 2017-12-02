import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { Event } from '@dash/comps/Event';
import { Icon } from '@dash/comps/Icon';
import autoScroll from '../utilities/autoScroll';
import '../styles/EventList.css';

// TODO: Create autoScroll HOC.

class EventList extends Component {
	componentDidMount() {
		autoScroll.start({
			selector: '.EventList-container'
		});
	}

	componentWillUnmount() {
		autoScroll.stop();
	}

	render({ props, state } = this) {
		const editEvent = props.editEvent && props.editEvent;

		return (
			<div styleName='EventList' className='EventList-container'>
				<Choose>
					<When condition={props.events.keys().length}>
						<For each="event" of={props.events.values()} index="index">
							<Event
								key={event.uid}
								index={index}
								event={event}
							/>
						</For>
					</When>
					<Otherwise>
						<p styleName='NoEventsWarning'>No events in this list.</p>
					</Otherwise>
				</Choose>
				<div styleName='EventListOptions'>
					<Icon name='plus' size='xl' onClick={props.insertEvent} />
				</div>
			</div>
		)
	}
}

export default observer(EventList);
