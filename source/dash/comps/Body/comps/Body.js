import React from 'react'
import { observer } from 'mobx-react';

import '../styles/Body.css';

const Body = observer((props) => {
	return (
		<main styleName='Body'>
			{props.children}
		</main>
	)
});

export default Body;
