import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';

import { Main } from '@dash/comps/Main';
import { Header } from '@dash/comps/Header';
import { Body } from '@dash/comps/Body';
import { Icon } from '@dash/comps/Icon';
import { EventList } from '@dash/comps/EventList';
import '../styles/Recorder.css';

@inject('records')
@observer
class Recorder extends Component {
	render({ props } = this) {
		const recording = props.records.recording ? 'recording' : '';

		return (
			<div styleName="Recorder">
				<Main>
					<Header title="Recorder">
						<Icon
							name="trash"
							size="xl"
							onClick={props.records.clearEvents}
							styleName='ClearIcon'
						/>
						<Icon
							name="microphone"
							size="xl"
							onClick={props.records.toggleRecording}
							styleName={`RecordIcon ${recording}`}
						/>
					</Header>
					<Body>
						<EventList records={props.records} />
					</Body>
				</Main>
			</div>
		);
	}
}

export default Recorder;
