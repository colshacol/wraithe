import React from 'react'
import { observer } from 'mobx-react';

import { Icon } from '@dash/comps/Icon';
import '../styles/SelectorOptions.css';

const getCssIconClass = (selectorType) => selectorType === 'css' ? 'selectedOption' : 'selectableOption';
const getXpathIconClass = (selectorType) => selectorType === 'xpath' ? 'selectedOption' : 'selectableOption';

const SelectorOptions = (props) => {
	const cssIconClass = getCssIconClass(props.selectorType);
	const xPathIconClass = getXpathIconClass(props.selectorType);

	const toggleSelectorType = (event) => {
		props.event.setSelectorType({
			type: event.target.getAttribute('selector-type')
		})
	}

	return (
		<div styleName='SelectorOptions'>
			<div styleName='type'>
				<Icon name='css3' onClick={toggleSelectorType} selector-type='css' size='xl' styleName='option' className={cssIconClass} />
				<Icon name='xing-square' onClick={toggleSelectorType} selector-type='xpath' size='xl' styleName='option' className={xPathIconClass} />
			</div>
			<div styleName='helpers'>
				<Icon name='file-code-o' onClick={props.openSelectorSearch}size='xl' styleName='option' className='selectableOption' />
				<Icon name='crosshairs' size='xl' styleName='option' className='selectableOption' />
			</div>
		</div>
	)
};

export default observer(SelectorOptions);
