import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { Main } from '@dash/comps/Main';
import { Header } from '@dash/comps/Header';
import { EventList } from '@dash/comps/EventList';
import '../styles/Settings.css';

@inject('records')
@observer
class Settings extends Component {
	render() {
		return (
			<div styleName="Settings">
				<Main>
					<Header title="Settings" />
					<EventList records={this.props.records} />
				</Main>
			</div>
		);
	}
}

export default Settings;
