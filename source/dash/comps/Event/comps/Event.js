import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, action, computed } from 'mobx';
import cssXpath from 'css-xpath';

import { Icon } from '@dash/comps/Icon';
import { Modal } from '@dash/comps/Modal';
import { SelectorSearch } from '@dash/comps/SelectorSearch';
import SelectorWithOptions from './SelectorWithOptions';
import EventTop from './EventTop';
import '../styles/Event.css';

@observer
class Event extends Component {
	state = EventStore.create({
		currentSelector: this.props.event.selector,
		originalSelector: this.props.event.selector,
		currentLabel: this.props.event.label,
		originalLabel: this.props.event.label,
		editable: !!props.editable,
	});

	render({ props, store } = this) {
		const { event } = props;
		const { store } = this;

		return (
			<div styleName="Event" className={`event-uid-${event.uid}`}>
				<div styleName="top">
					<EventTop
						index={props.index}
						type={event.type}
						label={event.label}
						testResult={event.testResult || ''}
						editable
					/>
					<div styleName="EventOptions">
						<Icon styleName="RemoveIcon" onClick={props.remove} name="close" size="xl" />
					</div>
				</div>
				<SelectorWithOptions
					openSelectorSearch={this.openSelectorSearch}
					event={event}
					editable
				/>
				<If condition={this.selectorSearchVisible}>
					<SelectorSearch handleClose={this.handleSelectorSearchClose} />
				</If>
			</div>
		);
	}
}

export default Event;
