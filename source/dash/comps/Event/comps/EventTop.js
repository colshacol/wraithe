import React, { Component } from 'react';
import { observer } from 'mobx-react';
import truncate from 'lodash.truncate';
import TextArea from 'react-textarea-autosize';

import EventTopStore from '../stores/EventTopStore.js';
import { Icon } from '@dash/comps/Icon';
import withStore from '@dash/utilities/withStore';
import '../styles/EventTop.css';

const EventTop = (props) => {
	const { store } = props;

	return (
		<span styleName="container">
			<Icon styleName='SaveIcon' onClick={props.save} name='floppy-o' size='xl' />
			<h4 styleName="index">#{props.index}</h4>
			<h4 styleName={`EventTop ${props.testResult}`} onClick={store.handleLabelFocus}>
				{props.type}
			</h4>
			<Choose>
				<When condition={props.editable}>
					<TextArea
						style={{ width: '100%', height: '14px' }}
						onChange={store.updateLabel}
						onBlur={store.handleLabelBlur}
						onFocus={store.handleLabelFocus}
						styleName="label"
						resizable="false"
						spellCheck="false"
						value={store.label}
						maxRows={1}
						wrap='off'
						autoFocus
					/>
				</When>
				<Otherwise>
					<h4 styleName="label">
						{store.label}
					</h4>
				</Otherwise>
			</Choose>
		</span>
	);
};

export default withStore(EventTopStore)(observer(EventTop));
