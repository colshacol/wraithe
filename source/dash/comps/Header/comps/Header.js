import React from 'react'
import { observer } from 'mobx-react';

import '../styles/Header.css';

const Header = observer((props) => {
	return (
		<div styleName={`Header`}>
			<h1>{props.title}</h1>
			<If condition={props.children}>
				<div styleName='SceneOptions'>
					{props.children}
				</div>
			</If>
		</div>
	)
});

export default Header;
