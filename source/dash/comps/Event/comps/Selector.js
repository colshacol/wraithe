import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { observable, action, computed } from 'mobx';
import truncate from 'lodash.truncate';
import TextArea from 'react-textarea-autosize';

import '../styles/Selector.css';

@observer
class Selector extends Component {
	render({ props, hovered, selector } = this) {
		return (
			<Choose>
				<When condition={props.editable}>
					<TextArea
						onChange={this.updateSelector}
						onBlur={this.collapsePath}
						onFocus={this.expandPath}
						styleName='Selector'
						spellCheck='false'
						value={this.path}
					/>
				</When>
				<Otherwise>
					<small
						styleName='Selector'
						onClick={this.togglePathTruncation}
					>
						{this.path}
					</small>
				</Otherwise>
			</Choose>
		)
	}
}

export default Selector;
