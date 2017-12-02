export default (self) => {
	return {
		get maxTestAttempts() {
			return self.timeout / 500;
		}
	}
}