import React from 'react';

import '../styles/Icon.css';

const Icon = (props) => {
	return (
		<i
			{...props}
			styleName='Icon'
			className={`fa fa-${props.name} fa-${props.size} ${props.className}`}
			aria-hidden="true"
		></i>
	);
}

Icon.defaultProps = {
	size: 'lg'
}

export default Icon;
