import React from 'react';

import '../styles/ModalHeader.css';

const ModalHeader = (props) => {
	return (
		<section styleName='ModalHeader'>
			<h2>{props.title}</h2>
		</section>
	)
}

export default ModalHeader;
