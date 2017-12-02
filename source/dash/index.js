require("regenerator-runtime")
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { observer, Provider } from 'mobx-react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require('../fontawesome');

import { Recorder } from '@dash/scenes/Recorder';
import { Dashboard } from '@dash/scenes/Dashboard';
import { Create } from '@dash/scenes/Create';
import { Navbar } from '@dash/comps/Navbar';
import { Frame } from '@dash/comps/Frame';
import Records from './stores/Records';
import './styles/index.css';

ReactDOM.render(
	<Provider records={new Records()}>
		<Router history={hashHistory}>
			<Route path="/" component={Frame}>
				<IndexRoute component={Dashboard} />
				<Route path="/create" component={Create} />
			</Route>
		</Router>
	</Provider>,
	document.querySelector('#mountPoint')
);
