export default (self) => {
	return {
		get selector() {
			return (self.inspectingSelector)
				? self.currentSelector
				: truncate(self.currentSelector, {
					length: 55
				});
		}
	}
}