import React from 'react';
import { observer } from 'mobx-react';

import { Icon } from '@dash/comps/Icon';
import '../styles/HeaderIcons.css';

const HeaderIcons = props => {
	const trashIconClass = (props.storeState === 'idle' && props.eventCount > 0) ? 'active' : '';
	const recordIconClass = (props.storeState !== 'playing') ? 'active' : '';
	const playIconClass = (props.storeState === 'idle') ? 'active' : '';
	const stopIconClass = (props.storeState === 'playing') ? 'active' : '';

	return (
		<div>
			<Icon
				name="trash"
				size="xl"
				onClick={props.clearEvents}
				styleName="ClearIcon"
				className={`headerIcon ${trashIconClass}`}
			/>
			<Icon
				name={props.storeState === 'recording' ? 'microphone-slash' : 'microphone'}
				size="xl"
				onClick={props.toggleRecording}
				styleName="RecordIcon"
				className={`headerIcon ${recordIconClass}`}
			/>
			<Icon
				name="play"
				size="xl"
				onClick={props.togglePlaying}
				styleName="PlayOrPauseIcon"
				className={`headerIcon ${playIconClass}`}
			/>
			<Icon
				name="stop-circle"
				size="xl"
				onClick={props.togglePlaying}
				styleName="RecordIcon"
				className={`headerIcon ${stopIconClass}`}
			/>
		</div>
	);
};

export default observer(HeaderIcons);
