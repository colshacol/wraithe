import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

import '../styles/Modal.css';

const modalRoot = document.querySelector('#__modals__');

@observer
class Modal extends Component {
	constructor(props) {
		super(props);
		this.element = document.createElement('div');
		this.element.classList.add('Modal');
		this.element.classList.add('__modal__');
	}

  componentDidMount() {
		modalRoot.appendChild(this.element);
		this.element.addEventListener('click', (event) => {
			this.props.handleClose(event);
		})
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.element);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.element,
    );
  }
}

export default Modal;
