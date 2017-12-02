import React from 'react'
import { observer } from 'mobx-react';

import Selector from './Selector';
import SelectorOptions from './SelectorOptions';
import '../styles/SelectorWithOptions.css';

const SelectorWithOptions = (props) => {
	return (
		<div styleName='SelectorWithOptions'>
			<Selector event={props.event} editable={props.editable} />
			<SelectorOptions
				openSelectorSearch={props.openSelectorSearch}
				editable={props.editable}
				event={props.event}
			/>
		</div>
	)
}

export default observer(SelectorWithOptions);
