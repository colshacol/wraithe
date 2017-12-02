export default (self) => {
	const { props } = self;
	const { event } = props;

	return {
		set: {
			label(label: string) {
				self.currentLabel = label;
			},

			selector(selector: string) {
				self.currentSelector = selector;
			}
		},

		handleLabelFocus() {
			self.editingLabel = !self.editingLabel;
		},

		handleLabelBlur() {
			if (self.originalLabel !== value) {
				self.originalLabel = value;
				event.setLabel(value);
			}
		},

		toggleSelectorExpansion() {
			self.inspectingSelector = !self.inspectingSelector;
		}

		expandSelector() {
			self.inspectingSelector = true;
		},

		collapseSelector() {
			if (self.currentSelector !== self.originalSelector && self.editable) {
				event.setSelector(self.currentSelector);
			}
			
			self.inspectingSelector = false;
		},

		openSelectorSearch() {
			self.viewingSelectorSearch = true;
		},

		closeSelectorSearch(event: Event) {
			if (Array.from(event.target.classList).includes('__modal__')) {
				self.openSelectorSearch();
			}
		}
	}
}