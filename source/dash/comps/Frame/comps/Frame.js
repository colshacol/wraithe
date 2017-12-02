import React from 'react';
import DevTools from 'mobx-react-devtools';

import { Navbar } from '@dash/comps/Navbar';
import { Icon } from '@dash/comps/Icon';
import '../styles/Frame.css';

const Frame = props => {
	return (
		<div styleName="Frame">
			<DevTools />
			<Navbar />
			{props.children}
		</div>
	);
};

export default Frame;
