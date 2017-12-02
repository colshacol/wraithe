import React from 'react'
import { observer } from 'mobx-react';

import '../styles/Main.css';

const Main = observer((props) => {
	return (
		<main styleName='Main'>
			{props.children}
		</main>
	)
});

export default Main;
