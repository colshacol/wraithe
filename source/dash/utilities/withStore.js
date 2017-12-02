import * as React from 'react';
import { observer } from 'mobx-react';

export default (store) => (Comp) => {
	return @observer class LocalStoreProvider extends React.Component {
		store = new store(this.props);

		componentWillReceiveProps(newProps) {
			this.store.handleNewProps(newProps);
		}

		render({ store, props } = this) {
			return (
				<Comp store={store} {...props} />
			)
		}
	};
}
