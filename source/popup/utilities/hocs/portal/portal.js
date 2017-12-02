import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { inject } from 'mobx-react';
import * as utils from './utilities';

type OptionsT = {
	selector: string,
	tagName: string,
	attributes: Object,
	children: any
}

export default (options: OptionsT) => {
	return (Comp) => {
		return inject('interfaceStore')(class Portal extends React.Component {
			mountPoint = this.props.interfaceStore.elements[options.selector];
			element = utils.createElement({
				tagName: options.tagName,
				attributes: options.attributes
			});

			componentDidMount() {
				this.mountPoint.appendChild(this.element);
			}

			componentWillUnmount() {
				this.mountPoint.removeChild(this.element);
			}

			render({ props } = this) {
				return ReactDOM.createPortal(
					<Comp {...props} />,
					this.element,
				);
			}
		});
	}
}
