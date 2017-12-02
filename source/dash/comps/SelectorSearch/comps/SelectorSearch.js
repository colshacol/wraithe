import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

import { Modal } from '@dash/comps/Modal';
import { ModalHeader } from '@dash/comps/Modal';

import '../styles/SelectorSearch.css';

@observer
class SelectorSearch extends Component {
	@observable searchValue = '';

	@action updateSearchValue = ({ target: { value }}) => {
		this.searchValue = value;
	}
  render() {
		return (
			<Modal handleClose={this.props.handleClose}>
				<div styleName='SelectorSearch'>
					<ModalHeader title='Selector Search' />
					<div styleName='searchInput'>
						<input value={this.searchValue} placeholder='search selectors...' onChange={this.updateSearchValue} />
					</div>
				</div>
			</Modal>
		);
  }
}

export default SelectorSearch;
