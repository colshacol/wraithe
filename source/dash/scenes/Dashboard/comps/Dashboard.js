import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { Main } from '@dash/comps/Main';
import { Header } from '@dash/comps/Header';
import { Body } from '@dash/comps/Body';
import { EventList } from '@dash/comps/EventList';
import '../styles/Dashboard.css';

@inject('records')
@observer
class Dashboard extends Component {
	render() {
		return (
			<div styleName="Dashboard">
				<Main>
					<Header title="Dashboard" />
					<Body>
						<small>dash yo</small>
					</Body>
				</Main>
			</div>
		);
	}
}

export default Dashboard;
