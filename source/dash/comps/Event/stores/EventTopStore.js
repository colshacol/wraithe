import { types } from 'mobx-state-tree';

export default types.model({
	selectorSearchVisible: false,
	editingLabel: false,
	currentLabel: types.string,
	originalLabel: types.string,
	currentSelector: types.string,
	originalSelector: types.string,
});

// class EventTopStore {
// 	@observable editingLabel = false;
// 	@observable label = '';
// 	originalLabel = '';

// 	constructor(props) {
// 		this.originalLabel = props.label;
// 		this.label = props.label;
// 		this.props = props;
// 	}

// 	@action
// 	updateLabel= ({ target: { value } }) => {
// 		this.label = value;
// 	};

// 	@action
// 	handleLabelFocus = () => {
// 		this.editingLabel = !this.editingLabel;
// 	};

// 	@action
// 	handleLabelBlur = ({ target: { value }}) => {
// 		if (this.originalLabel !== value) {
// 			this.originalLabel = value;
// 			this.props.event.setLabel(value);
// 		}
// 	};
// }

// export default EventTopStore;
