import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router';
// import { browserHistory } from 'react-router'

import { Icon } from '@dash/comps/Icon';
import '../styles/Navbar.css';

const Navbar = props => {
	return (
		<nav styleName="Navbar">
			<Link to="/">
				<Icon name="home" size="3x" styleName='NavIcon' />
			</Link>
			<Link to="/recorder">
				<Icon name="microphone" size="3x" styleName='NavIcon' />
			</Link>
			<Link to="/create">
				<Icon name="plus" size="3x" styleName='NavIcon' />
			</Link>
			<Link to="/settings">
				<Icon name="cog" size="3x" styleName='NavIcon' />
			</Link>
		</nav>
	);
};

export default Navbar;
